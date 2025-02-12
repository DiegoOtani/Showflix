import AddShowForm from "../../components/AddShowForm"
import AuthWrapper from "../../components/AuthWrapper"

const AddShowPage = () => {
  return (
    <AuthWrapper>
      <section>
        <AddShowForm />
      </section>
    </AuthWrapper>
  )
}

export default AddShowPage