import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faHome,
  faAddressBook,
  faCheckDouble,
  faTrash,
  faPlusCircle,
  faCheck,
  faUndo
} from "@fortawesome/free-solid-svg-icons";

library.add(faUndo, faCheck, faBars, faHome, faAddressBook, faCheckDouble, faTrash, faPlusCircle);

Vue.component("fa-icon", FontAwesomeIcon);
