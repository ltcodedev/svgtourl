import styled from "styled-components";
import { Button as Primebutton } from 'primereact/button';

export const Pbutton = styled(Primebutton)`
  &.p-button{  
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    border: none;

    &:enabled:hover,  &:enabled:focus, &:enabled:active{
      background-color: ${({theme}) => theme.colors.primary_hover };
      color: ${({theme}) => theme.colors.text};
    }
  }
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .header_page{
    &-container {
      width: 100%;
      max-width: 1300px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      nav {
        margin-right: 30px;

        ul {
          display: flex;
          padding: 0;
          margin: 0;

          li {
            display: flex;
            font-weight: 400;
            font-size: 15px;

            a {
              text-decoration: none;
              color: ${({theme}) => theme.colors.text_light};

              &:hover {
                color: ${({theme}) => theme.colors.primary };
              }
            }

            & + li {
              margin-left: 30px;
            }
          }
        }
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;