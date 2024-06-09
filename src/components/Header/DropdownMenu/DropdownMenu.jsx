const DropdownMenu = () => {
  // const [selectedOption, setSelectedOption] = useState('user')

  // const handleSelect = (option) => {
  //   setSelectedOption(option)
  // }

  return (
    <div className="dropdown-menu">
      <select
      // value={selectedOption}
      // onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="user">User</option>
        <option value="login">Login</option>
        <option value="admin">Admin</option>
        <option value="logout">Logout</option>
      </select>
    </div>
  )
}

export default DropdownMenu
