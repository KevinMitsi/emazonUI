import { CommonModule } from "@angular/common";
import { CategoryTableComponent } from "./category-table/category-table.component";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { AddCategoryFormComponent } from "./add-category-form/add-category-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavHeaderComponent } from "./nav-header/nav-header.component";
import { AtomsModule } from "../atoms/atoms.module";
import { MoleculesModule } from "../molecules/molecules.module";

@NgModule({
    declarations: [
      CategoryTableComponent,
      FooterComponent,
      AddCategoryFormComponent,
      NavHeaderComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    AtomsModule,
    MoleculesModule
],
    exports: [
      CategoryTableComponent,
      FooterComponent,
      AddCategoryFormComponent,
      NavHeaderComponent
    ]
  })
  export class OrganismsModule { }
  