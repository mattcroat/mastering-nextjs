import styled from 'styled-components'

import styles from '@/styles/style.module.scss'

const Home = () => (
  <div className={`title ${styles.title}`}>
    <Title>Mastering Next.js</Title>
    <p>CSS</p>
    <style jsx>
      {`
        .title:hover {
          transform: rotate(360deg) scale(0);
          transition: transform 1000ms;
        }
      `}
    </style>
  </div>
)

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`

export default Home
