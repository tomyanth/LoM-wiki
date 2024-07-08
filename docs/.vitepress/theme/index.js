// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
// import CharacterTab Group
import CharacterTabs from "./components/character/CharacterTabs.vue";
import CharacterTab from "./components/character/CharacterTab.vue";
import CharacterBackground from "./components/character/CharacterBackground.vue";
import CharacterName from "./components/character/CharacterName.vue";
import CharacterTable from "./components/character/CharacterTable.vue";
import CharacterTr from "./components/character/CharacterTr.vue";
import CharacterTd from "./components/character/CharacterTd.vue";
import ChineseStyleTd from "./components/tdStyles/ChineseStyleTd.vue";
// import Icon Group
import Icon from "./components/Icon.vue";
import BadendIcon from "./components/icons/BadendIcon.vue";
import Girl0Icon from "./components/icons/Girl0Icon.vue";
import Girl1Icon from "./components/icons/Girl1Icon.vue";
import Girl2Icon from "./components/icons/Girl2Icon.vue";
import Girl3Icon from "./components/icons/Girl3Icon.vue";
import Girl4Icon from "./components/icons/Girl4Icon.vue";
import Girl5Icon from "./components/icons/Girl5Icon.vue";
import Girl6Icon from "./components/icons/Girl6Icon.vue";
import Girl7Icon from "./components/icons/Girl7Icon.vue";
import Girl8Icon from "./components/icons/Girl8Icon.vue";
// tools
import Tabs from "./components/tools/Tabs.vue";
import Tab from "./components/tools/Tab.vue";
import MarkdownWrapper from "./components/tools/MarkdownWrapper.vue";
import InfoList from "./components/tools/InfoList.vue";
import Info from "./components/tools/Info.vue";

import "./styles/style.css";
import "./styles/borderless.css";
import "./styles/twikoo.css";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({ app }) {
    // import CharacterTab Group
    app.component("ChTabs", CharacterTabs);
    app.component("ChTab", CharacterTab);
    app.component("ChBg", CharacterBackground);
    app.component("ChName", CharacterName);
    app.component("ChTable", CharacterTable);
    app.component("ChTr", CharacterTr);
    app.component("ChTd", CharacterTd);
    app.component("CnTd", ChineseStyleTd);

    // Icon component group
    app.component("Icon", Icon);
    // following component based on Icon,
    // if you need, you can add image map to function getIconSource() in Icon.vue,
    // and create a new vue file to register
    app.component("BadendIcon", BadendIcon);
    app.component("Girl0Icon", Girl0Icon);
    app.component("Girl1Icon", Girl1Icon);
    app.component("Girl2Icon", Girl2Icon);
    app.component("Girl3Icon", Girl3Icon);
    app.component("Girl4Icon", Girl4Icon);
    app.component("Girl5Icon", Girl5Icon);
    app.component("Girl6Icon", Girl6Icon);
    app.component("Girl7Icon", Girl7Icon);
    app.component("Girl8Icon", Girl8Icon);

    // tools
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);
    app.component("MarkdownWrapper", MarkdownWrapper);
    app.component("InfoList", InfoList);
    app.component("Info", Info);
  },
};
