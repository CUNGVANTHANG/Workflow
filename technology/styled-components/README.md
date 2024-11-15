## Styled Components (CSS in JS)

## Install

```
npm install styled-components
```

## Support

Extension Supports:

- vscode-styled-components

- styled-components-snippets

## Using

### 1. Cách sử dụng styled components dựa vào đặt tên biến

```tsx
import styled from "styled-components";
```

```tsx
const StyleComponent = styled.tag``
```

Trong đó tag là các thẻ HTML, viết CSS bình thường trong ``


*Example:*

```ts
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`
```

### 2. Cách sử dụng styled components dựa vào đặt tên class

> [!CAUTION]
> Nhược điểm: Rủi ro về trùng tên class với các component khác.

```tsx
import styled from "styled-components";
```

Ta sử dụng 1 styled component chung cho tất cả và sử dụng class

```tsx
const StyledCard = styled.div`
    position: relative;

    .card-image {
        height: 400px;
        width: 100%;
        border-radius: 8px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }
` 
```

```tsx
return (
    <StyledCar>
        <div className="card-image">
            <img src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-12.jpg.webp" alt="" />
        </div>
    </StyledCar>
)
```


### 3. Cách sử dụng props trong styled components

```tsx
import styled, { css } from "styled-components"
```

Cú pháp gõ nhanh (khi cài extension trên)

```
scp + Tab
```

*Example 1:*

```ts
interface CardAmountProps {
    secondary?: boolean;
}

const CardAmount = styled.span<CardAmountProps>`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    ${(props) => props?.secondary && css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
    color: transparent;
    --webkit-background-clip: text;
    background-clip: text;
`
```

trong đó `props.secondary` thì secondary là tên props

```ts
return (
  <CardAmount secondary>12,000 PSL</CardAmount>
)
```

Hiểu là khi truyền `secondary` thì sẽ ghi đè lại backgroud ở phía trên thành `background: linear-gradient(86.88deg, #20e3b2, #2cccff);` còn không sẽ là `background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);`

*Example 2:*

```ts
interface CardAmountProps {
    secondary?: boolean;
    fontSize?: string;
}

const CardAmount = styled.span<CardAmountProps>`
    font-size: ${props => props.fontSize || "18px"};;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    ${(props) => props?.secondary && css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
    color: transparent;
    --webkit-background-clip: text;
    background-clip: text;
`
```

```ts
return (
  <CardAmount fontSize="22px" >12,000 PSL</CardAmount>
)
```

Hiểu là nếu ta truyền `fontSize="22px"`thì `font-size: 22px;` còn không sẽ là `font-size: 18px;`

*Example 3:* Nếu sử dụng cách 2 bằng cách đặt tên class

```ts
interface StyledCardProps {
    fontSize?: string;
    secondary?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
    .card-amount {
        font-size: ${props => props.fontSize || "18px"};;
        font-weight: bold;
        background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
        ${(props) => props?.secondary && css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff);
        `};
        color: transparent;
        --webkit-background-clip: text;
        background-clip: text;
    }
`
```

Ta cần truyền props dựa vào component chứa class đó

```tsx
return (
    <StyledCard fontSize="22px">
        <span className="card-amount" >12,000 PSL</span>
    </StyledCard>
);
```

## 4. Cách sử dụng Global Style trong styled components

Tạo file `GlobalStyles.tsx`

```tsx
import { createGlobalStyle } from "styled-components";
```

*Example:*

```tsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
    }
`
```

Trong file `App.tsx` ta gọi tới component đó

```tsx
import Card from "./components/Card/Card"
import CardList from "./components/Card/CardList"
import { GlobalStyles } from "./GlobalStyles"

function App() {
  
  return <div style={{backgroundColor: "#eee", height: "100vh"}}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
  </div>
}

export default App
```

> [!TIP]
> Cách viết code gọn hơn

Thay vì ta viết CSS ngay trong component `GlobalStyles` thì ta có thể tạo 1 file có tên là `GlobalClasses.tsx` để thực hiện điều đó

```tsx
import { css } from "styled-components";


export const GlobalClasses = css`
    body {
        font-family: 'Roboto', sans-serif;
    }
`
```

```tsx
import { createGlobalStyle } from "styled-components";
import { GlobalClasses } from "./GlobalClasses";

export const GlobalStyles = createGlobalStyle`
    ${GlobalClasses}
`
```

## 5. Cách sử dụng Theme trong styled components

```tsx
import { ThemeProvider } from "styled-components"
```

Ta truyền props `theme={theme}`

```tsx
const theme = {
  colors: {
    primary: "#0070f3",
  },
}

function App() {
  
  return <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
  </ThemeProvider>
}
```

Để có thể sử dụng

```tsx
const UserName = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
`
```