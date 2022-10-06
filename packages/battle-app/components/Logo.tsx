
export default function Logo()
{
    return (
        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>A85F22E8-0B5D-4C5F-930B-83709E6A3D7A</title>
            <defs>
                <path d="M20,2.30939927 C22.4752,0.880339244 25.5248,0.880339244 28,2.30939927 L40.7846,9.69059939 C43.2598,11.1196994 44.7846,13.7606995 44.7846,16.6187995 L44.7846,31.3811997 C44.7846,34.2392998 43.2598,36.8802998 40.7846,38.3093999 L28,45.6906 C25.5248,47.1197 22.4752,47.1197 20,45.6906 L7.21539,38.3093999 C4.74018,36.8802998 3.21539,34.2392998 3.21539,31.3811997 L3.21539,16.6187995 C3.21539,13.7606995 4.74018,11.1196994 7.21539,9.69059939 L20,2.30939927 Z" id="path-1"></path>
                <filter x="-3.6%" y="-3.3%" width="107.2%" height="106.6%" filterUnits="objectBoundingBox" id="filter-2">
                    <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.409999996 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                    <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                    <feOffset dx="0" dy="1" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                    <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                    <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                        <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                    </feMerge>
                </filter>
                <linearGradient x1="50%" y1="-3.06161713e-15%" x2="50%" y2="100%" id="linearGradient-3">
                    <stop stop-color="#1A1D1F" stop-opacity="0.75" offset="0%"></stop>
                    <stop stop-color="#1A1D1F" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="6a_Battle_Ready" transform="translate(-696.000000, -25.000000)" fill-rule="nonzero">
                    <g id="global/header" transform="translate(60.000000, 25.000000)">
                        <g id="Logo" transform="translate(636.000000, 0.000000)">
                            <g id="Polygon-1">
                                <use fill="#FCFCFC" xlinkHref="#path-1"></use>
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                            </g>
                            <rect id="Rectangle-3" fill="#1A1D1F" x="22" y="18" width="4" height="12" rx="2"></rect>
                            <rect id="Rectangle-4" fill="url(#linearGradient-3)" x="14" y="20" width="4" height="8" rx="2"></rect>
                            <rect id="Rectangle-5" fill="url(#linearGradient-3)" x="30" y="20" width="4" height="8" rx="2"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}
