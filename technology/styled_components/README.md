## Styled Components

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