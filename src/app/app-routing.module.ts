import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsComponent } from "./components/news/news.component";

const routes: Routes = [
  // { path: "**", redirectTo: 'news' },
  { path: "home", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "product", component: ProductComponent },
  { path: "**", redirectTo: 'news' }, // 默认就调到home组件;从上往下匹配，有匹配到的就结束。只能放在最后。
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
