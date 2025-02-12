import AddShowForm from "../../components/AddShowForm"
import AuthWrapper from "../../components/AuthWrapper"
import { SectionStyled } from "./styles"

const AddShowPage = () => {
  return (
    <AuthWrapper>
      <SectionStyled>
        <AddShowForm />
      </SectionStyled>
    </AuthWrapper>
  )
}

export default AddShowPage