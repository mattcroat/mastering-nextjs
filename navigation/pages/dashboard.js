const Dashboard = ({ login, html_url, avatar_url }) => (
  <>
    <h1>{login}</h1>
    <div>
      <img src={avatar_url} alt={login} />
    </div>
    <a href={html_url}>{html_url}</a>
  </>
)

Dashboard.getInitialProps = async () => {
  const response = await fetch(`https://api.github.com/users/mattcroat`)
  const user = await response.json()

  return user
}

export default Dashboard
