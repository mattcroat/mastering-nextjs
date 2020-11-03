import { Heading, Field, Button } from 'theme-ui'
import { useForm } from '@formspree/react'

const Form = () => {
  const [state, handleSubmit] = useForm('newsletter')

  if (state.succeeded) {
    return <Heading>Thank you for signing up!</Heading>
  }

  return (
    <>
      <Heading mb={3}>Subscribe to my Newsletter</Heading>
      <form onSubmit={handleSubmit}>
        <Field defaultValue="" label="First name" mb={2} name="name" />
        <Field defaultValue="" label="Email" mb={3} name="email" />
        <Button disabled={state.submitting} type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default Form
