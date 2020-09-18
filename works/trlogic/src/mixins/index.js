export default {
  data() {
    return {
      done: [],
    };
  },
  computed: {
    canUndo() {
      if (this.done.length === 1) {
        return true;
      }

      return false;
    },
    getDone() {
      return { ...this.done[this.done.length - 1] };
    }
  },
  methods: {
    undo() {
      this.done.pop();
      this.$store.dispatch("updateContact", this.done[this.done.length - 1]);
      this.done.pop();
      this.contact = this.getDone;
      this.title = this.contact.name;
    }
  },
  created() {
    // console.log("Created");
    let contact = this.getContact(this.$route.params.id);
    this.done.push(contact);

    this.$store.subscribe(mutation => {
      if (mutation.type === "update") {
        this.done.push({
          ...mutation.payload
        });
      }
    });
  }
};