import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getAuth } from 'firebase/auth';

export default class TestingRoute extends Route {
    @service firebase;
    
    async model() {
        const auth = getAuth(this.firebase.app);
        await auth.authStateReady();
        return auth.currentUser;
    }
}
