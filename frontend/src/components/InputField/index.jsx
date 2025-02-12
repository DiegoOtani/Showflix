import { InputFieldStyled, SearchButton } from "./styles"

const InputField = ({ icon: Icon, placeholder, onChange, value, onClick }) => {
  return (
    <InputFieldStyled>
      <input 
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchButton onClick={onClick ? onClick : undefined}>
        <Icon color="black" size={20}/>
      </SearchButton>
    </InputFieldStyled>
  )
}

export default InputField