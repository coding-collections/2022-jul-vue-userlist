Vue.createApp({
  data() {
    return {
      searchQueryString: "",
      users: [],
      firstname: "Joe",
      surname: "Doe",
    };
  },
  computed: {
    fullName() {
      return this.firstname + " " + this.surname;
    },
    userList() {
      return this.users.filter((item) =>
        item.name.includes(this.searchQueryString)
      );
    },
  },
  methods: {
    showDetails(id) {
      const currentUser = this.users.find((item) => item.id === id);
      currentUser.showDetails = !currentUser.showDetails;
    },
  },
  created() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then(
        (jsonData) =>
          (this.users = jsonData.map((item) => {
            item.showDetails = false;
            return item;
          }))
      );
  },
}).mount("#app");
