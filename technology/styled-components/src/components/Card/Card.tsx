import styled, { css } from "styled-components"


const StyledCard = styled.div`
    position: relative;
`

const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 72px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`

const UserName = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};;
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardTitle = styled.h3`
    font-size: 18px;
    color: black;
`

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

const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-12.jpg.webp" alt="" />
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s" alt="" />
                        <UserName>@thangcv</UserName>
                    </CardUser>
                    <div>
                        256
                    </div>
                </CardTop>
                <CardFooter>
                    <CardTitle>Cung Van Thang</CardTitle>
                    <CardAmount fontSize="22px" >12,000 PSL</CardAmount>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};  

export default Card;