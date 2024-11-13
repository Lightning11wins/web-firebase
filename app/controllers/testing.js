import Controller from '@ember/controller';
import { service } from '@ember/service';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export default class TestingController extends Controller {
  @service firebase;
  @service auth;

  @action test() {
    const auth = getAuth(this.firebase.app);
    console.log(auth.currentUser);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
}
