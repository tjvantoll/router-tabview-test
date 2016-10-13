import { Component, OnInit } from "@angular/core";
@Component({
  selector: "my-page2",
  template: `
    <TabView>
      <StackLayout *tabItem="{title: 'Tab 1'}">
        <my-tab1></my-tab1>
      </StackLayout>
      <StackLayout *tabItem="{title: 'Tab 2'}">
        <my-tab2></my-tab2>
      </StackLayout>
    </TabView>
  `
})
export class Page2Component {
}