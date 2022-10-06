#!/bin/bash
set -e
cd "$(dirname "$0")/.."

NAME="$1-func"

if [ "$NAME" == "" ]; then
    echo "arg 1 should be the name of the function to create"
fi

# Generate function project
npx nx generate @nrwl/node:application $NAME --tags=function

# Update main.ts
cat << EOF > packages/$NAME/src/main.ts
export * from "./$NAME"
EOF

# Create default handler
cat << EOF > packages/$NAME/src/$NAME.ts
export async function handler(evt:any){
    console.info('$NAME',evt);
    return evt;
}
EOF

# Set externalDependencies to none in project.json
node --harmony << EOF > packages/$NAME/project.json
const json=$(cat packages/$NAME/project.json)
json.targets.build.options.externalDependencies="none";
console.log(JSON.stringify(json,null,4))
EOF

# add implicitDependencies to cdk
node --harmony << EOF > packages/cdk/project.json
const json=$(cat packages/cdk/project.json)
json.implicitDependencies.push('$NAME')
console.log(JSON.stringify(json,null,4))
EOF
