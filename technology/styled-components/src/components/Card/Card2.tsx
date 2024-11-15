import styled, { css } from "styled-components"

interface StyledCardProps {
    fontSize?: string;
    secondary?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
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

    .card-content {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        width: calc(100% - 72px);
        bottom: 0;
        background-color: white;
        z-index: 10;
        border-radius: 20px;
        padding: 20px;
    }

    .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
    }

    .user-avatar {
        width: 30px;
        height: 30px;
        border-radius: 100rem;
        object-fit: cover;
        flex-shrink: 0;
    }

    .user-name {
        font-size: 16px;
        font-weight: 300;
        color: #333;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-title {
        font-size: 18px;
        color: black;
    }

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

const Card2 = () => {
    return (
        <StyledCard fontSize="22px">
            <div className="card-image">
                <img src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-12.jpg.webp" alt="" />
            </div>
            <div className="card-content">
                <div className="card-top">
                    <div className="card-user">
                        <img className="user-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s" alt="" />
                        <span className="user-name">@thangcv</span>
                    </div>
                    <div>
                        256
                    </div>
                </div>
                <div className="card-footer">
                    <h3 className="card-title">Cung Van Thang</h3>
                    <span className="card-amount" >12,000 PSL</span>
                </div>
            </div>
        </StyledCard>
    );
};  

export default Card2;