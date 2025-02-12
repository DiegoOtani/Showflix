import { InputFieldStyled, SearchButton } from "./styles"

const InputField = ({ icon: Icon, placeholder, onChange, value }) => {
  return (
    <InputFieldStyled>
      <input 
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchButton>
        <Icon color="black" size={20}/>
      </SearchButton>
    </InputFieldStyled>
  )
}

export default InputField