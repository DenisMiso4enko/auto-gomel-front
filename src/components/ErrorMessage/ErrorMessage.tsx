import { Helmet } from 'react-helmet'

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="error-message container">
      <Helmet>
        <title>Ошибка | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <h3>{message}</h3>
    </div>
  )
}

export default ErrorMessage
