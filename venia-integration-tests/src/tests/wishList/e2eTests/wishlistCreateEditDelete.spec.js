import { firstName, lastName, accountEmail, accountPassword } from '../../../fixtures/accountAccess/index';

import { createAccount, openLoginDialog } from '../../../actions/accountAccess/index';

import { visitPage } from '../../../actions/routes/index';

import { assertCreateAccount, goToMyAccount } from '../../../actions/myAccountMenu/index';

import { wishlistPage } from '../../../fixtures/myAccountMenu/index';

import { assertEmptyWishlist } from '../../../actions/wishlist/index';

import { categorySweaters } from '../../../fixtures/categoryPage/index';

import { homePage } from '../../../fixtures/homePage/index';

import { addProductToWishlistFromCategoryPage } from '../../../actions/categoryPage/index';

import { wishListPage } from '../../../fixtures/wishlist/index';


// TODO add tags CE, EE to test to filter and run tests as needed
describe('verify wishlist basic features', () => {
    it('user should be able to add and remove products from wishlist', () => {
        visitPage(homePage);
        openLoginDialog();
        createAccount(firstName, lastName, accountEmail, accountPassword);
        assertCreateAccount(firstName);
        goToMyAccount(firstName, wishlistPage);
        assertEmptyWishlist(wishlistPage);
        visitPage(categorySweaters);
        addProductToWishlistFromCategoryPage();
        visitPage(wishListPage);
        // assertProductInWishlist();
        // goToProductsPage
        // addProductToWishlist
        // goToWishListPage
        // assertProductInWishlist
        // assertProductInWishlist
        // removeProduct
        // assertEmptyWishlist
    });
});
