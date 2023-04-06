# 💄 Styled Components를 이용하여 만든 초간단 버튼 예제 파일.
:octocat: 바로 가기 : https://light9639.github.io/Styled-Components-Simple-Button/
<br /><br />
<img src="https://user-images.githubusercontent.com/95972251/230281694-8f5d14f2-c7fb-4caf-8e83-cdb3e304629a.png" alt="Img" width="500px" />
<br /><br />
✨ 💄 Styled Components를 이용하여 만든 초간단 버튼 예제 파일. ✨

## :tada: React 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt 선택하면 생성 완료.
## 🚤 Styled-Components 설치
- `styled-components` 설치하기.
```bash
npm install styled-components
# or
yarn add styled-components
```

## ✒️ App.tsx, Button.tsx, StyledButton.tsx, types.ts 수정 및 작성
### :zap: App.tsx
```typescript
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Button from "./components/Button";
import { StyledRoundButton } from "./components/StyledButton";

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => setTheme(theme.value === 'light' ? darkTheme : lightTheme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Button variant="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <Button variant="primary">Click Me!</Button>
          <StyledRoundButton variant="secondary">Click Me!</StyledRoundButton>
          <h1>Hello!</h1>
        </StyledLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}

const lightTheme = {
  value: 'light',
  style: {
      backgroundColor: '#ffffff',
      color: '#343a40',
  },
};

const darkTheme = {
  value: 'dark',
  style: {
      backgroundColor: '#343a40',
      color: '#ffffff',
  },
};

const StyledLayout = styled.div`
    height: 100vh;
    padding: 12px;
    background-color: ${({ theme }) => theme.style.backgroundColor};
    color: ${({ theme }) => theme.style.color};
`;
```
### :zap: Button.tsx
```typescript
// Button.tsx
import React, { FC } from 'react';
import { ButtonProps } from './types';
import StyledButton from './StyledButton';

const Button: FC<ButtonProps> = ({ children, variant = 'primary' }) => {
    return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
```
### :zap: StyledButton.tsx
```typescript
// StyledButton.tsx
import styled from 'styled-components';

const backgroundColor = {
    primary: '#1c7ed6',
    secondary: '#ae3ec9',
};

const hoverBackgroundColor = {
    primary: '#1971c2',
    secondary: '#9c36b5',
};

export interface StyledButtonProps {
    readonly variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props) => backgroundColor[props.variant]};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 0;
    cursor: pointer;
    transition: 0.1s background-color ease-in-out;

    &:hover {
        background-color: ${(props) => hoverBackgroundColor[props.variant]};
    }
`;

export const StyledRoundButton = styled(StyledButton)`
    border-radius: 24px;
`;

export default StyledButton;
```
### :zap: types.ts
```typescript
export interface ButtonProps {
    children: String
    readonly variant: 'primary' | 'secondary';
    onClick?: () => void;
}
```
## 📎 출처
- <a href="https://www.daleseo.com/react-styled-components/">Styled Components로 React 컴포넌트 스타일하기</a>
- <a href="https://www.zigae.com/styled-components-abstract/">우리가 몰랐던 styled-components 동작원리</a>
- <a href="https://nykim.work/107">[ReactJS] 4. styled-components 💅🏾</a>
