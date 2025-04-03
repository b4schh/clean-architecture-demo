class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  validate = () => {
    if (!this.name || !this.email) {
      throw new Error("Yêu cầu nhập tên và email!");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      throw new Error("Email sai định dạng!");
    }
  };
}

export default User;


