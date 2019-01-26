import styled from 'styled-components';
// https://www.styled-components.com/docs/api
export const ButtonContainer = styled.button`
    text-tarnsform: capitalized;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue) ;
    borderRadius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.3rem 0.5rem 0.3rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline:none;
    }
  `;
// export const btnStyle = {
//     textTarnsform: 'capitalized',
//     fontSize: '1.4rem',
//     background: 'transparent',
//     border: '0.05rem solid var(--lightBlue)',
//     color: 'var(--lightBlue)',
//     borderRadius: '0.5rem',
//     padding: '0.2rem 0.5rem',
//     cursor: 'pointer',
//     margin: '0.3rem 0.5rem 0.3rem 0',
//     transition: 'all 0.5s ease-in-out'
    // &:hover{
    //     background:var(--lightBlue);
    //     color: var(--mainBlue);
    // }
    // &:focus {
    //     outline:none;
    // }
// };