import type { App } from 'vue';
import { Icon } from './Icon';
import AIcon from '/@/components/jeecg/AIcon.vue';
//Tinymce富文本
import Editor from '/@/components/Tinymce/src/Editor.vue';

import { Button, JUploadButton } from './Button';

// 按需注册antd的组件
import {
  // Need
  Button as AntButton,
  Select,
  Alert,
  Checkbox,
  DatePicker,
  TimePicker,
  Calendar,
  Radio,
  Switch,
  Card,
  List,
  Tabs,
  Descriptions,
  Tree,
  Table,
  Divider,
  Modal,
  Drawer,
  TreeSelect,
  Dropdown,
  Tag,
  Tooltip,
  Badge,
  Popover,
  Upload,
  Transfer,
  Steps,
  PageHeader,
  Result,
  Empty,
  Avatar,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  Spin,
  Space,
  Layout,
  Collapse,
  Slider,
  InputNumber,
  Carousel,
  Popconfirm,
  Skeleton,
  Cascader,
  Rate,
} from 'ant-design-vue';
const compList = [AntButton.Group, Icon, AIcon, JUploadButton];

//敲敲云—仪表盘设计器（拖拽设计）
import DragEngine from '@qiaoqiaoyun/drag-free';
import('@qiaoqiaoyun/drag-free/lib/index.css');
console.log('---初始化---， 全局注册仪表盘--------------');

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp);
  });
  //仪表盘依赖Tinymce，需要提前加载（没办法按需加载了）
  app.component(Editor.name, Editor);

  app
    .use(Select)
    .use(Alert)
    .use(Button)
    .use(Breadcrumb)
    .use(Checkbox)
    .use(DatePicker)
    .use(TimePicker)
    .use(Calendar)
    .use(Radio)
    .use(Switch)
    .use(Card)
    .use(List)
    .use(Descriptions)
    .use(Tree)
    .use(TreeSelect)
    .use(Table)
    .use(Divider)
    .use(Modal)
    .use(Drawer)
    .use(Dropdown)
    .use(Tag)
    .use(Tooltip)
    .use(Badge)
    .use(Popover)
    .use(Upload)
    .use(Transfer)
    .use(Steps)
    .use(PageHeader)
    .use(Result)
    .use(Empty)
    .use(Avatar)
    .use(Menu)
    .use(Tabs)
    .use(Form)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Spin)
    .use(Space)
    .use(Layout)
    .use(Collapse)
    .use(Slider)
    .use(InputNumber)
    .use(Carousel)
    .use(Popconfirm)
    .use(DragEngine)
    .use(Skeleton)
    .use(Cascader)
    .use(Rate);
  console.log("注册antd组件完成！");
}
