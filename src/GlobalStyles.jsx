import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@media screen and (max-width: 767px) {
  .hideOnMobile {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .showOnMobile {
    display: none !important;
  }
}

:root {
  --main-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --blue-txt-color: #264061;
  --accent-color: #FC842D;
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;
  --border-color: #e0e0e0;
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  min-height: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-style: normal;  
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
}



body,
h1,
h2,
h3,
h4,
p,
ul,
li
 {
  margin: 0;
}


ul,
ol{
    padding: 0px;
    margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}

.hidden{
  visibility: hidden;
  width: 0px;
  height: 0px;
}

.visible{
  visibility: visible;
}

.active{
  background-color: #FC842D !important;
}

.monday {
  /* background-color: #b3ffb3; */
  width: 150px;
}

.tuesday {
  /* background-color: #ffb3d9; */
  width: 150px;
}

.wednesday {
  /* background-color: #ff00ff; */
  width: 150px;
}

.thursday {
  /* background-color: #b3d9ff; */
  width: 150px;
}

.friday {
  /* background-color: #e6b3b3; */
  width: 150px;
}

.saturday {
  /* background-color: #ffb3ff; */
  width: 150px;
}

.sunday {
  /* background-color: #99ffff; */
  width: 150px;
}

.time{
    /* width: 70px; */
  /* background-color: #8080ff; */
}

.select{
  background-color: inherit;
};

.visitTraineeYES{
  background-color: #9df8a0;
}

.visitTraineeNO{
  background-color: #f56666;
}

@media screen and (max-width: 1200px){
  .monday {
    width: 50px;
    font-size: 10px;
  }

  .tuesday {
    width: 50px;
    font-size: 10px;
  }

  .wednesday {
    width: 50px;
    font-size: 10px;
  }

  .thursday {
    width: 50px;
    font-size: 10px;
  }

  .friday {
    width: 50px;
    font-size: 10px;
  }

  .saturday {
    width: 50px;
    font-size: 10px;
  }

  .sunday {
    width: 50px;
    font-size: 10px;
  }
  .select{
    font-size: 12px;
    width: 100%;
    background-color: inherit;
  }
  .time{
    font-size: 10px;
  }
  .form-size{
    width: 50px;
  }
}
.table-back-color{
  background-color: #f0ade6;
}
`;

export default GlobalStyle;
