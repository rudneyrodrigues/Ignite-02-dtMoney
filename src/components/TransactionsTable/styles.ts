import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: relative;

  table {
    width: 100%;
    border-spacing: 0 .5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: none;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-radius: .25rem 0 0 .25rem;
      }

      &:last-child {
        border-radius: 0 .25rem .25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }

  @media(max-width: 720px) {
    margin-top: 2rem;

    table {
      thead {
        display: none;
      }

      tbody {
        tr {
          margin-bottom: 2rem;

          td {
            display: block;
            text-align: center;

            & + td {
              padding-top: 0;
            }

            &.amount {
              grid-area: amount;
              font-size: 1.25rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;