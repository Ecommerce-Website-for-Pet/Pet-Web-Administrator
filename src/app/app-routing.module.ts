import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManageAdminAccountsComponent } from './manage-admin-accounts/manage-admin-accounts.component';
import { ManageCustomerAccountsComponent } from './manage-customer-accounts/manage-customer-accounts.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'admin', 
    component: AdminComponent
  },
  {
    path: 'order', 
    component: OrderComponent
  },
  {
    path: 'blog', 
    component: BlogComponent
  },
  {
    path: 'category', 
    component: CategoryComponent
  },
  
  {
    path: 'admin-login', 
    component: AdminLoginComponent
  },
  {
    path: 'manage-admin-accounts', 
    component: ManageAdminAccountsComponent
  },
  {
    path: 'manage-customer-accounts', 
    component: ManageCustomerAccountsComponent
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent
  },
  // Điền tiếp ở dưới dòng này nha
  






  { path: '**', pathMatch: 'full', 
        component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
