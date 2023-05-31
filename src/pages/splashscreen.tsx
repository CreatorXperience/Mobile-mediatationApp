import React from 'react'
import '.././style.css'

export default class Splash extends React.Component {
    render(): React.ReactNode {
        return <div className='container' id='home'>

           <div className='svg'> 
           <svg width="300" height="300" viewBox="0 0 375 453" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_12)">
<path d="M171.87 124.371V121.203C171.87 118.329 174.167 116 177 116C179.833 116 182.13 118.329 182.13 121.203V124.371C182.13 127.245 179.833 129.574 177 129.574C174.167 129.574 171.87 127.244 171.87 124.371ZM122.263 140.64C123.213 142.31 124.937 143.244 126.711 143.244C127.58 143.244 128.462 143.019 129.269 142.547C131.723 141.111 132.565 137.928 131.15 135.439L129.59 132.697C128.173 130.207 125.035 129.354 122.583 130.789C120.129 132.225 119.287 135.408 120.703 137.897L122.263 140.64ZM224.729 142.547C225.536 143.02 226.418 143.245 227.288 143.245C229.061 143.245 230.786 142.311 231.736 140.642L233.297 137.899C234.713 135.41 233.873 132.228 231.419 130.791C228.966 129.355 225.829 130.208 224.412 132.696L222.851 135.439C221.434 137.927 222.275 141.109 224.729 142.547ZM264.116 180.591C264.986 180.591 265.869 180.366 266.677 179.893L269.381 178.309C271.834 176.872 272.674 173.689 271.257 171.201C269.841 168.712 266.704 167.86 264.25 169.298L261.546 170.881C259.093 172.318 258.253 175.501 259.669 177.99C260.619 179.658 262.343 180.591 264.116 180.591ZM277.45 272.874C270.789 286.265 252.175 295.263 231.131 295.263C216.705 295.263 203.192 291.042 194.005 283.816C188.743 287.474 183.187 289.83 177.682 290.55C177.431 290.583 177.18 290.595 176.937 290.592C176.732 290.591 176.525 290.577 176.319 290.55C170.814 289.829 165.258 287.474 159.995 283.816C150.808 291.043 137.296 295.263 122.869 295.263C101.825 295.263 83.2112 286.265 76.5499 272.874C75.817 271.4 75.8164 269.661 76.5499 268.186C81.4648 258.303 92.704 250.809 106.926 247.561C99.5465 236.929 96.8517 224.365 100.194 213.618C100.603 212.303 101.511 211.206 102.716 210.569C111.145 206.115 121.835 205.792 132.24 209.491C133.785 204.3 136.216 199.783 139.51 196.262C140.637 195.058 142.264 194.472 143.887 194.684C146.577 195.036 149.28 195.779 151.955 196.873C157.382 185.238 165.382 176.561 174.859 172.15C176.217 171.517 177.78 171.517 179.138 172.15C188.612 176.559 196.609 185.23 202.038 196.858C204.713 195.773 207.418 195.037 210.114 194.684C211.738 194.472 213.364 195.058 214.49 196.262C217.785 199.783 220.215 204.3 221.76 209.49C232.166 205.792 242.855 206.115 251.283 210.568C252.488 211.205 253.396 212.302 253.805 213.617C257.149 224.365 254.454 236.928 247.073 247.56C261.296 250.808 272.535 258.302 277.45 268.185C278.183 269.661 278.183 271.4 277.45 272.874ZM215.339 258.114C220.909 256.71 226.443 253.819 231.318 249.67C241.274 241.197 246.488 228.859 244.557 218.889C238.532 216.515 231.016 216.883 223.61 219.897C224.321 229.613 222.594 240.602 218.327 251.419C217.421 253.718 216.42 255.954 215.339 258.114ZM160.95 201.943C166.86 206.211 172.372 212.117 176.989 219.183C181.63 212.041 187.136 206.144 193.032 201.902C189.081 193.243 183.425 186.47 177 182.728C170.563 186.476 164.901 193.265 160.95 201.943ZM122.681 249.67C127.555 253.819 133.09 256.711 138.662 258.114C137.58 255.953 136.581 253.719 135.673 251.417C131.407 240.602 129.68 229.612 130.39 219.897C122.984 216.882 115.469 216.513 109.442 218.887C107.511 228.859 112.725 241.196 122.681 249.67ZM151.891 276.915C149.682 274.661 147.572 272.172 145.594 269.483C135.429 269.307 124.824 265.081 116.086 257.642C115.718 257.329 115.357 257.013 115 256.693C102.506 258.263 92.0343 263.487 87.1075 270.529C93.0973 279.075 107.259 284.856 122.868 284.856C133.95 284.856 144.549 281.892 151.891 276.915ZM175.006 237.683C169.894 224.723 161.347 214.035 152.363 208.641C152.112 208.52 151.875 208.381 151.652 208.226C149.526 207.018 147.381 206.111 145.254 205.542C143.127 208.627 141.704 212.573 140.995 217.068C140.977 217.342 140.937 217.616 140.875 217.888C139.691 226.569 141.103 237.174 145.197 247.552C149.329 258.026 155.703 267.015 162.739 272.926C162.903 273.046 163.062 273.178 163.214 273.32C167.026 276.435 171.021 278.643 174.949 279.693C181.254 270.55 181.38 253.842 175.006 237.683ZM208.802 247.551C212.894 237.177 214.307 226.576 213.126 217.896C213.061 217.617 213.02 217.336 213.002 217.056C212.294 212.565 210.87 208.623 208.745 205.541C206.649 206.099 204.534 206.985 202.433 208.165C202.155 208.368 201.853 208.545 201.53 208.691C194.552 212.898 187.818 220.306 182.748 229.634C183.376 231.002 183.971 232.397 184.531 233.817C190.348 248.564 191.445 263.634 188.077 275.357C188.992 274.727 189.901 274.041 190.8 273.307C190.942 273.175 191.09 273.052 191.244 272.939C198.286 267.028 204.668 258.033 208.802 247.551ZM266.892 270.529C261.965 263.487 251.493 258.263 238.998 256.693C238.642 257.013 238.279 257.33 237.912 257.642C229.174 265.079 218.57 269.306 208.405 269.483C206.428 272.172 204.318 274.661 202.108 276.915C209.451 281.891 220.051 284.856 231.131 284.856C246.74 284.856 260.902 279.075 266.892 270.529ZM226.728 309.015C224.592 307.127 221.352 307.354 219.491 309.521C216.256 313.288 200.934 318.593 177 318.593C153.065 318.593 137.744 313.288 134.509 309.521C132.648 307.354 129.408 307.127 127.271 309.015C125.135 310.902 124.912 314.189 126.773 316.356C134.787 325.689 158.839 329 177.001 329C195.162 329 219.214 325.688 227.228 316.356C229.088 314.189 228.864 310.902 226.728 309.015ZM109.565 198.915C112.29 199.694 115.125 198.084 115.894 195.318C123.562 167.71 148.69 148.428 177 148.428C205.31 148.428 230.438 167.71 238.106 195.318C238.744 197.613 240.802 199.112 243.041 199.112C243.502 199.112 243.97 199.048 244.435 198.915C247.162 198.136 248.75 195.262 247.981 192.496C239.073 160.422 209.884 138.021 177 138.021C144.116 138.021 114.927 160.422 106.019 192.496C105.251 195.262 106.838 198.136 109.565 198.915ZM177 311.512C181.407 311.512 196.196 311.035 201.459 304.902C203.319 302.734 203.095 299.447 200.958 297.56C198.833 295.683 195.614 295.899 193.75 298.035C192.58 299.113 186.508 301.105 177 301.105C167.49 301.105 161.417 299.113 160.248 298.034C158.383 295.899 155.166 295.683 153.04 297.561C150.904 299.449 150.68 302.735 152.541 304.902C157.806 311.035 172.594 311.512 177 311.512ZM84.619 178.308L87.3212 179.892C88.1294 180.366 89.0117 180.591 89.8832 180.591C91.6553 180.591 93.3788 179.659 94.3296 177.99C95.7471 175.502 94.9075 172.319 92.4544 170.882L89.7521 169.298C87.3007 167.861 84.1613 168.711 82.7444 171.2C81.3269 173.688 82.1664 176.87 84.619 178.308Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_12" x="-44" y="0" width="442" height="453" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="60"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_12"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_12" result="shape"/>
</filter>
</defs>
</svg>
</div>

<div className='text-gray-100 text-3xl font-semibold mt-[14rem] text-center w-[100%] absolute'> WELCOME </div>
<div className='text-gray-100 text-lg text-center font-light mt-[16rem] w-[14rem] absolute'>
    Do meditation. Stay focused. Live a healthy life. </div> 

    <button className='w-[90%] py-4 fixed bottom-20 bg-[#7C9A92] mx-4 absolute mt-[30rem] text-gray-100 text-lg rounded-xl'> Login  </button> 
    <div className='mt-[34rem] fixed bottom-10 text-gray-400'>Don’t have an account? <span className='text-gray-100 font-medium'> Sign Up </span></div>
             </div> 
          
    }}