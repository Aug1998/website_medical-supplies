import React from 'react'
import styled from '@emotion/styled'
import { elements } from '../theme'

export default function Icon({ icon, size, withBorder, link }) {
  return (
    <IconContainer size={size} withBorder={withBorder} onClick={() => window.open(link, "_blank")}>
      {icon === "twitter" && (
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={elements.footerIcon} d="M7.22838 0H0.34375L8.46766 10.4263L0.786371 18.9328H3.3926L9.67543 11.9759L15.0966 18.9328H21.9812L13.515 8.06725L20.801 0H18.1946L12.3072 6.51855L7.22838 0ZM16.0801 17.0395L4.27784 1.89327H6.24482L18.0471 17.0395H16.0801Z"/>
        </svg>
      )}
      {icon === "instagram" && (
       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fill={elements.footerIcon} d="M12.1711 0C8.8681 0 8.4528 0.0152137 7.15509 0.0730262C5.85739 0.133881 4.97336 0.337747 4.19901 0.63898C3.3868 0.944501 2.65099 1.42374 2.04325 2.04325C1.42415 2.65126 0.944947 3.38693 0.63898 4.19901C0.337747 4.97188 0.132367 5.85725 0.0730262 7.1505C0.0152137 8.45131 0 8.86513 0 12.1725C0 15.477 0.0152137 15.8908 0.0730262 17.1886C0.133881 18.4849 0.337747 19.3687 0.63898 20.1431C0.950857 20.9433 1.36627 21.6219 2.04325 22.2989C2.71874 22.9758 3.39721 23.3928 4.19753 23.7031C4.97336 24.0043 5.85577 24.2097 7.15198 24.2691C8.45131 24.3268 8.86513 24.3421 12.1711 24.3421C15.477 24.3421 15.8893 24.3268 17.1886 24.2691C18.4832 24.2082 19.3702 24.0043 20.1446 23.7031C20.9564 23.3975 21.6915 22.9182 22.2989 22.2989C22.9758 21.6219 23.3913 20.9433 23.7031 20.1431C24.0028 19.3687 24.2082 18.4849 24.2691 17.1886C24.3268 15.8908 24.3421 15.477 24.3421 12.1711C24.3421 8.86513 24.3268 8.45131 24.2691 7.15198C24.2082 5.85739 24.0028 4.97188 23.7031 4.19901C23.3972 3.38693 22.918 2.65126 22.2989 2.04325C21.6913 1.42347 20.9554 0.944244 20.1431 0.63898C19.3671 0.337747 18.4817 0.132367 17.187 0.0730262C15.8878 0.0152137 15.4755 0 12.1681 0H12.1725H12.1711ZM11.0803 2.1939H12.1725C15.4222 2.1939 15.8071 2.20445 17.0896 2.26382C18.2763 2.3171 18.9214 2.51643 19.3505 2.68223C19.9179 2.9028 20.3242 3.16745 20.7502 3.59344C21.1761 4.01942 21.4393 4.42418 21.6599 4.99324C21.8273 5.42072 22.025 6.06578 22.0783 7.25246C22.1377 8.53502 22.1498 8.9199 22.1498 12.1681C22.1498 15.4161 22.1377 15.8026 22.0783 17.0851C22.025 18.2717 21.8258 18.9153 21.6599 19.3444C21.4647 19.8729 21.1533 20.3507 20.7485 20.7425C20.3226 21.1684 19.9179 21.4317 19.349 21.6523C18.923 21.8197 18.2778 22.0174 17.0896 22.0722C15.8071 22.1301 15.4222 22.1437 12.1725 22.1437C8.92287 22.1437 8.53651 22.1301 7.25395 22.0722C6.06727 22.0174 5.42369 21.8197 4.99473 21.6523C4.46597 21.4574 3.98778 21.1465 3.59506 20.7425C3.1899 20.35 2.87805 19.8718 2.68223 19.3428C2.51643 18.9153 2.3171 18.2702 2.26382 17.0836C2.20607 15.8011 2.1939 15.4161 2.1939 12.165C2.1939 8.9153 2.20607 8.53191 2.26382 7.24935C2.31859 6.06267 2.51643 5.41761 2.68372 4.98865C2.90428 4.4212 3.16907 4.01496 3.59506 3.58897C4.02105 3.16299 4.42567 2.89982 4.99473 2.67912C5.42369 2.51184 6.06727 2.31399 7.25395 2.25922C8.3768 2.20756 8.81184 2.19228 11.0803 2.19079V2.1939ZM18.6689 4.21416C18.477 4.21416 18.2871 4.25203 18.11 4.32546C17.9327 4.39875 17.7718 4.5064 17.6361 4.64204C17.5005 4.77768 17.393 4.93861 17.3195 5.1159C17.2461 5.29306 17.2084 5.48292 17.2084 5.67482C17.2084 5.86658 17.2461 6.05645 17.3195 6.23361C17.393 6.4109 17.5005 6.57183 17.6361 6.70747C17.7718 6.84311 17.9327 6.95076 18.11 7.02405C18.2871 7.09748 18.477 7.13535 18.6689 7.13535C19.0562 7.13535 19.4277 6.98145 19.7017 6.70747C19.9755 6.43362 20.1294 6.06213 20.1294 5.67482C20.1294 5.28738 19.9755 4.91589 19.7017 4.64204C19.4277 4.36806 19.0562 4.21416 18.6689 4.21416ZM12.1725 5.92122C11.3436 5.90824 10.5203 6.06037 9.7505 6.36871C8.98075 6.67704 8.2801 7.13535 7.68927 7.71713C7.09843 8.29877 6.62917 8.99224 6.30893 9.75699C5.9887 10.5217 5.82372 11.3426 5.82372 12.1719C5.82372 13.001 5.9887 13.8219 6.30893 14.5866C6.62917 15.3514 7.09843 16.0448 7.68927 16.6265C8.2801 17.2083 8.98075 17.6666 9.7505 17.9749C10.5203 18.2832 11.3436 18.4354 12.1725 18.4224C13.8135 18.3968 15.3784 17.727 16.5298 16.5576C17.6812 15.3881 18.3264 13.8129 18.3264 12.1719C18.3264 10.5308 17.6812 8.95546 16.5298 7.78609C15.3784 6.61659 13.8135 5.94678 12.1725 5.92122ZM12.1725 8.1135C13.2487 8.1135 14.2807 8.54097 15.0417 9.30193C15.8026 10.0629 16.2301 11.095 16.2301 12.1711C16.2301 13.2471 15.8026 14.2792 15.0417 15.0402C14.2807 15.8011 13.2487 16.2286 12.1725 16.2286C11.0965 16.2286 10.0644 15.8011 9.30342 15.0402C8.54259 14.2792 8.11512 13.2471 8.11512 12.1711C8.11512 11.095 8.54259 10.0629 9.30342 9.30193C10.0644 8.54097 11.0965 8.1135 12.1725 8.1135Z"/>
       </svg>
       
      )}
      {icon === "youtube" && (
        <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={elements.footerIcon} d="M19.537 11.1568L20.0249 12.046C20.3495 11.8679 20.5513 11.5271 20.5513 11.1568C20.5513 10.7865 20.3495 10.4457 20.0249 10.2676L19.537 11.1568ZM14.3305 14.0139H13.3163C13.3163 14.3723 13.5054 14.7041 13.8139 14.8867C14.1222 15.0693 14.5043 15.0755 14.8184 14.9031L14.3305 14.0139ZM14.3305 8.29971L14.8184 7.41055C14.5043 7.23813 14.1222 7.24435 13.8139 7.42691C13.5054 7.60948 13.3163 7.94134 13.3163 8.29971H14.3305ZM16.5619 21.2993L16.5589 22.3136H16.5619V21.2993ZM10.7425 21.2051L10.7724 20.1912H10.7698L10.7425 21.2051ZM19.0491 10.2676L13.8426 13.1247L14.8184 14.9031L20.0249 12.046L19.0491 10.2676ZM15.3448 14.0139V8.29971H13.3163V14.0139H15.3448ZM13.8426 9.18888L19.0491 12.046L20.0249 10.2676L14.8184 7.41055L13.8426 9.18888ZM2.70039 10.1454C2.70039 8.04791 2.70271 6.58075 2.85884 5.4671C3.01002 4.38875 3.28882 3.78371 3.74519 3.33284L2.31959 1.88976C1.42971 2.76891 1.03537 3.86309 0.84998 5.18541C0.66955 6.47243 0.671876 8.10728 0.671876 10.1454H2.70039ZM3.74519 3.33284C4.20981 2.87386 4.84263 2.5827 5.96155 2.405C7.10955 2.22271 8.62188 2.17957 10.7702 2.12101L10.715 0.0931763C8.62228 0.15038 6.95309 0.193655 5.64335 0.401645C4.3044 0.614232 3.20271 1.01736 2.31959 1.88976L3.74519 3.33284ZM10.7702 2.12101C12.7741 2.06678 14.8165 2.02851 16.5619 2.02851V0C14.7906 0 12.7276 0.0388123 10.715 0.0931763L10.7702 2.12101ZM16.5619 2.02851C18.3057 2.02851 20.3484 2.06678 22.3538 2.12101L22.409 0.0931763C20.3949 0.0388123 18.3317 0 16.5619 0V2.02851ZM22.3538 2.12101C24.5021 2.17957 26.0142 2.22271 27.162 2.405C28.2807 2.5827 28.9129 2.87386 29.3766 3.33257L30.8031 1.89017C29.9205 1.01737 28.8189 0.614232 27.4802 0.401645C26.1706 0.193655 24.5017 0.15038 22.409 0.0931763L22.3538 2.12101ZM29.3766 3.33257C29.8335 3.78344 30.1134 4.38929 30.2647 5.46778C30.421 6.58143 30.4233 8.04872 30.4233 10.1454H32.4519C32.4519 8.10795 32.4542 6.47311 32.2735 5.18582C32.0879 3.86323 31.694 2.76932 30.8031 1.89017L29.3766 3.33257ZM30.4233 10.1454V12.1667H32.4519V10.1454H30.4233ZM30.4233 12.1667C30.4233 14.2649 30.421 15.7322 30.2649 16.8458C30.1138 17.924 29.8349 18.5294 29.3781 18.981L30.8038 20.4242C31.6932 19.5445 32.0883 18.45 32.2738 17.1274C32.4542 15.8404 32.4519 14.2056 32.4519 12.1667H30.4233ZM29.3781 18.981C28.9133 19.4396 28.2814 19.7302 27.1627 19.9078C26.015 20.0901 24.5027 20.1334 22.3539 20.1912L22.4086 22.2189C24.5024 22.1625 26.1712 22.1193 27.4809 21.9113C28.8199 21.6986 29.9208 21.2954 30.8038 20.4242L29.3781 18.981ZM22.3539 20.1912C20.3506 20.2468 18.3072 20.2851 16.5619 20.2851V22.3136C18.3332 22.3136 20.3955 22.2748 22.4086 22.2189L22.3539 20.1912ZM16.5648 20.2851C14.6337 20.2795 12.7027 20.2482 10.7724 20.1912L10.7126 22.2189C12.6608 22.2764 14.6098 22.3079 16.5589 22.3136L16.5648 20.2851ZM10.7698 20.1912C8.6216 20.1332 7.10942 20.0905 5.96142 19.9083C4.84259 19.7308 4.20979 19.4396 3.74518 18.9808L2.31919 20.4234C3.20232 21.2958 4.30444 21.6994 5.64348 21.9118C6.95336 22.1197 8.62228 22.1625 10.7152 22.2189L10.7698 20.1912ZM3.74518 18.9808C3.28844 18.5291 3.01002 17.9238 2.85884 16.8454C2.70271 15.7318 2.70039 14.2649 2.70039 12.1682H0.671876C0.671876 14.2057 0.66955 15.8401 0.84998 17.1271C1.03537 18.4494 1.42967 19.5437 2.31919 20.4234L3.74518 18.9808ZM2.70039 12.1682V10.1454H0.671876V12.1682H2.70039Z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill={elements.footerIcon} fillRule="evenodd" clipRule="evenodd" d="M4.43122 0C3.51704 0 2.64031 0.363144 1.99392 1.00955C1.34752 1.65595 0.984375 2.53266 0.984375 3.44684C0.984375 4.36102 1.34752 5.23775 1.99392 5.88403C2.64031 6.53045 3.51704 6.89369 4.43122 6.89369C5.3454 6.89369 6.22212 6.53045 6.8684 5.88403C7.51482 5.23775 7.87806 4.36102 7.87806 3.44684C7.87806 2.53266 7.51482 1.65595 6.8684 1.00955C6.22212 0.363144 5.3454 0 4.43122 0ZM2.8644 3.44684C2.8644 3.03127 3.02952 2.63279 3.32338 2.33897C3.61711 2.04514 4.01564 1.88008 4.43122 1.88008C4.84666 1.88008 5.24519 2.04514 5.53905 2.33897C5.83292 2.63279 5.9979 3.03127 5.9979 3.44684C5.9979 3.86228 5.83292 4.26082 5.53905 4.55468C5.24519 4.84854 4.84666 5.01353 4.43122 5.01353C4.01564 5.01353 3.61711 4.84854 3.32338 4.55468C3.02952 4.26082 2.8644 3.86228 2.8644 3.44684ZM0.984375 8.46037C0.984375 8.211 1.08342 7.97191 1.25971 7.7957C1.436 7.61935 1.6751 7.52036 1.92441 7.52036H6.93791C7.18729 7.52036 7.42638 7.61935 7.60272 7.7957C7.77893 7.97191 7.87806 8.211 7.87806 8.46037V24.7544C7.87806 25.0037 7.77893 25.2428 7.60272 25.4191C7.42638 25.5955 7.18729 25.6945 6.93791 25.6945H1.92441C1.6751 25.6945 1.436 25.5955 1.25971 25.4191C1.08342 25.2428 0.984375 25.0037 0.984375 24.7544V8.46037ZM2.8644 9.40038V23.8144H5.9979V9.40038H2.8644ZM9.75808 8.46037C9.75808 8.211 9.85707 7.97191 10.0334 7.7957C10.2098 7.61935 10.4489 7.52036 10.6981 7.52036H15.7116C15.961 7.52036 16.2001 7.61935 16.3764 7.7957C16.5526 7.97191 16.6518 8.211 16.6518 8.46037V9.00428L17.1969 8.76992C18.137 8.36828 19.1343 8.11661 20.1524 8.02424C23.6307 7.70834 26.6788 10.4407 26.6788 13.9502V24.7544C26.6788 25.0037 26.5798 25.2428 26.4035 25.4191C26.2271 25.5955 25.9881 25.6945 25.7388 25.6945H20.7253C20.4759 25.6945 20.2368 25.5955 20.0605 25.4191C19.8843 25.2428 19.7851 25.0037 19.7851 24.7544V15.9807C19.7851 15.5652 19.6202 15.1666 19.3263 14.8729C19.0324 14.579 18.634 14.4139 18.2185 14.4139C17.8029 14.4139 17.4045 14.579 17.1106 14.8729C16.8168 15.1666 16.6518 15.5652 16.6518 15.9807V24.7544C16.6518 25.0037 16.5526 25.2428 16.3764 25.4191C16.2001 25.5955 15.961 25.6945 15.7116 25.6945H10.6981C10.4489 25.6945 10.2098 25.5955 10.0334 25.4191C9.85707 25.2428 9.75808 25.0037 9.75808 24.7544V8.46037ZM11.6381 9.40038V23.8144H14.7716V15.9807C14.7716 15.0666 15.1349 14.1898 15.7811 13.5434C16.4276 12.897 17.3043 12.5339 18.2185 12.5339C19.1326 12.5339 20.0094 12.897 20.6558 13.5434C21.3022 14.1898 21.6653 15.0666 21.6653 15.9807V23.8144H24.7988V13.9502C24.7988 11.5637 22.7169 9.67869 20.3242 9.89669C19.5021 9.97148 18.6969 10.1746 17.9377 10.4983L16.0827 11.2943C15.9396 11.3557 15.7836 11.3807 15.6285 11.367C15.4733 11.3532 15.324 11.301 15.1941 11.2152C15.0641 11.1295 14.9574 11.0128 14.8837 10.8757C14.81 10.7385 14.7715 10.5852 14.7716 10.4294V9.40038H11.6381Z"/>
        </svg>
      )}
      {icon === "arrowRight" && (
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9985 0C13.2081 1.34446 14.2541 2.36903 15.1363 3.07371C16.0186 3.76912 16.8508 4.28836 17.633 4.63143V5.2573C16.7325 5.70236 15.8594 6.2726 15.0135 6.96801C14.1677 7.65415 13.1581 8.66481 11.9848 10H10.9343C11.7893 8.1363 12.6852 6.70375 13.622 5.70236H0V4.29764H13.622C12.9307 3.39824 12.4487 2.73064 12.1758 2.29485C11.903 1.85906 11.4982 1.09411 10.9616 0H11.9985Z"/>
        </svg>
      )}
      {icon === "arrowRightSmall" && (
        <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.846 0.314453C15.7378 1.30566 16.5089 2.06104 17.1593 2.58057C17.8098 3.09326 18.4233 3.47607 19 3.729V4.19043C18.3362 4.51855 17.6924 4.93896 17.0688 5.45166C16.4452 5.95752 15.7009 6.70264 14.8359 7.68701H14.0614C14.6917 6.31299 15.3522 5.25684 16.0429 4.51855H0V3.48291H16.0429C15.5333 2.81982 15.1779 2.32764 14.9767 2.00635C14.7755 1.68506 14.4771 1.12109 14.0815 0.314453H14.846Z"/>
        </svg>
      )}
    </IconContainer>
  )
}

const IconContainer = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
  width: ${props => props.withBorder ? props.size : "unset"};
  height: ${props => props.withBorder ? props.size : "unset"};
  border: ${props => props.withBorder ? `2px solid ${elements.footerIcon}` : "unset"};
  border-radius: 4px;
  transition: all 0.2s;
  box-sizing: border-box;
  cursor: pointer;
  svg {
    height: ${props => props.withBorder ? "53%" : props.size};
    transition: all 0.2s;
  }
  &:hover{
    svg {
      filter: grayscale(1) brightness(200%);
    }
  }
`
