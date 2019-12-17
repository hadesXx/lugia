import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TABS from "@lugia/lugia-web/dist/tabs/lugia.tabs.zh-CN.json";
import TABPANE from "@lugia/lugia-web/dist/tabs/lugia.tabpane.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseTabs = require("./BaseTabs").default;
const PositionTabs = require("./PositionTabs").default;
const TypeTabs = require("./TypeTabs").default;
const PagedTypeTabs = require("./PagedTypeTabs").default;
const OrderTabs = require("./OrderTabs").default;
const ChangeTabs = require("./ChangeTabs").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title
                title={"标签页"}
                subTitle={"Tabs"}
                desc={"选项卡切换组件"}
              />
              <Demo
                title={"基本使用"}
                titleID={"tabs-0"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = Tabs.TabPane;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  display: inline-block;\n\`;\nconst children = [\n  <TabPane title={\'Tab1\'} content={<div>content of Tab1</div>} activityKey={\'0\'} />,\n  <TabPane\n    title={\'Tab2\'}\n    content={<div>content of Tab2</div>}\n    activityKey={\'1\'}\n  />,\n  <TabPane\n    title={\'Tab3\'}\n    content={<div>content of Tab3</div>}\n    activityKey={\'2\'}\n  />,\n  <TabPane\n    title={\'Tab4\'}\n    content={<div>content of Tab4</div>}\n    activityKey={\'3\'}\n  />,\n  <TabPane\n    title={\'Tab5\'}\n    content={<div>content of Tab5</div>}\n    activityKey={\'4\'}\n  />,\n  <TabPane\n    title={\'Tab6\'}\n    content={<div>content of Tab6</div>}\n    activityKey={\'5\'}\n  />\n];\nconst defaultData = [\n  {\n    title: \'Tab1\',\n    content: \'content of Tab1\'\n  },\n  {\n    title: \'Tab2\',\n    content: \'content of Tab2\'\n  },\n  {\n    title: \'Tab3\',\n    content: \'content of Tab3\'\n  },\n  {\n    title: \'Tab4\',\n    content: \'content of Tab4\'\n  },\n  {\n    title: \'Tab5\',\n    content: \'content of Tab5\'\n  },\n  {\n    title: \'Tab6\',\n    content: \'content of Tab6\'\n  },\n  {\n    title: \'Tab7\',\n    content: \'content of Tab7\'\n  },\n  {\n    title: \'Tab8\',\n    content: \'content of Tab8\'\n  }\n];\nexport default class BaseTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={\'top\'}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            data={defaultData}\n          />\n        </Wrapper>\n        <Wrapper>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={\'top\'}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            children={children}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "标签页基本使用 配置data,或者children,同时配置以data 优先显示"
                }
                demo={<BaseTabs />}
              ></Demo>
              <Demo
                title={"位置"}
                titleID={"tabs-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst Wrapper = styled.div\`\n  margin:10px 0;\n\`;\nconst defaultData = [\n  {\n    title: \'Tab1\',\n    content: \'content of Tab1\'\n  },\n  {\n    title: \'Tab2\',\n    content: \'content of Tab2\'\n  },\n  {\n    title: \'Tab3\',\n    content: \'content of Tab3\'\n  },\n  {\n    title: \'Tab4\',\n    content: \'content of Tab4\'\n  },\n  {\n    title: \'Tab5\',\n    content: \'content of Tab5\'\n  },\n  {\n    title: \'Tab6\',\n    content: \'content of Tab6\'\n  },\n  {\n    title: \'Tab7\',\n    content: \'content of Tab7\'\n  },\n  {\n    title: \'Tab8\',\n    content: \'content of Tab8\'\n  }\n];\nexport default class PositionTabs extends React.Component<any, any> {\n  state = {\n    tabPosition: \'top\'\n  };\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        ContentBlock: {\n          normal: {\n            width: \'88%\'\n          },\n        }\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    const data = [\n      { label: \'top\', value: \'top\' },\n      { label: \'bottom\', value: \'bottom\' },\n      { label: \'left\', value: \'left\' },\n      { label: \'right\', value: \'right\' }\n    ];\n\n    const handleSelect = obj => {\n      const { newValue } = obj;\n      this.setState({ tabPosition: newValue });\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Select displayField={\'label\'} data={data} onSelect={handleSelect} />\n        </Wrapper>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={this.state.tabPosition}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            data={defaultData}\n          />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以配置标签页显示位置,上,下,左,右四个方向"}
                demo={<PositionTabs />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"tabs-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = Tabs.TabPane;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  display: inline-block;\n\`;\nexport const hasActivityKeyData = [\n  {\n    title: \'Tab1\',\n    content: <div>content of Tab1</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: \'Tab2\',\n    content: <div>content of Tab2</div>,\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: \'Tab3\',\n    content: <div>content of Tab3</div>\n  },\n  {\n    activityKey: \'3\',\n    title: \'Tab4\',\n    content: <div>content of Tab4</div>\n  },\n  {\n    activityKey: \'4\',\n    title: \'Tab5\',\n    content: <div>content of Tab5</div>\n  },\n  {\n    activityKey: \'5\',\n    title: \'Tab6\',\n    content: <div>content of Tab6</div>\n  },\n  {\n    activityKey: \'6\',\n    title: \'Tab7\',\n    content: <div>content of Tab7</div>\n  },\n  {\n    activityKey: \'7\',\n    title: \'Tab8\',\n    content: <div>content of Tab8</div>\n  }\n];\nexport default class TypeTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    const onDelClick = e => {};\n\n    const onAddClick = e => {\n      const newTabs = {\n        title: \'new Tabs\',\n        content: \'new Tabs content\'\n      };\n      return newTabs;\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <br />\n          <Wrapper>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'single\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n              onDelClick={onDelClick}\n              onAddClick={onAddClick}\n            />\n          </Wrapper>\n          <br />\n          <br />\n          <Wrapper>\n            <Tabs\n              tabType={\'window\'}\n              pagedType={\'page\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n              onDelClick={onDelClick}\n              onAddClick={onAddClick}\n            />\n          </Wrapper>\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "可以配置标签页风格,默认是线性, 可以选择 卡片风格,窗口风格"
                }
                demo={<TypeTabs />}
              ></Demo>
              <Demo
                title={"翻页类型"}
                titleID={"tabs-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = Tabs.TabPane;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  display: inline-block;\n\`;\nexport const hasActivityKeyData = [\n  {\n    title: \'Tab1\',\n    content: <div>content of Tab1</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: \'Tab2\',\n    content: <div>content of Tab2</div>,\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: \'Tab3\',\n    content: <div>content of Tab3</div>\n  },\n  {\n    activityKey: \'3\',\n    title: \'Tab4\',\n    content: <div>content of Tab4</div>\n  },\n  {\n    activityKey: \'4\',\n    title: \'Tab5\',\n    content: <div>content of Tab5</div>\n  },\n  {\n    activityKey: \'5\',\n    title: \'Tab6\',\n    content: <div>content of Tab6</div>\n  },\n  {\n    activityKey: \'6\',\n    title: \'Tab7\',\n    content: <div>content of Tab7</div>\n  },\n  {\n    activityKey: \'7\',\n    title: \'Tab8\',\n    content: <div>content of Tab8</div>\n  }\n];\nexport default class PagedTypeTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        TitleContainer: {\n          normal: {\n            width: 290\n          },\n        }\n      },\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    return (\n      <Theme config={view}>\n          <Wrapper>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'single\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n            />\n          </Wrapper>\n          <br />\n          <Wrapper>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'page\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n            />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以配置标签页翻页类型,默认是单个, 可以设置为整页"}
                demo={<PagedTypeTabs />}
              ></Demo>
              <Demo
                title={"自定义增删标签页"}
                titleID={"tabs-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs } from \'@lugia/lugia-web\';\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst TabPane = Tabs.TabPane;\nexport const hasActivityKeyDefaultData = [\n  {\n    title: \'Tab1\',\n    content: <div>content of Tab1</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: \'Tab2\',\n    content: <div>content of Tab2</div>,\n    activityKey: \'1\'\n  },\n];\nexport default class OrderTabs extends React.Component<any, any> {\n  onAddClick = () => {\n    const item = {\n      title: \`Tab\${hasActivityKeyDefaultData.length + 1}\`,\n      content: \`Content of new Tab\${hasActivityKeyDefaultData.length + 1}\`,\n      activityKey:\`Tab\${hasActivityKeyDefaultData.length + 1}\`\n    };\n    hasActivityKeyDefaultData.push(item);\n  };\n  onDeleteClick = (activityKey: string) => {};\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        TitleContainer: {\n          normal: {\n            width: 326\n          },\n        }\n      },\n    };\n    return (\n      <div>\n        <Theme config={view}>\n          <Tabs\n            tabType={\'card\'}\n            pagedType={\'single\'}\n            onAddClick={this.onAddClick}\n            onDeleteClick={this.onDeleteClick}\n            defaultData={hasActivityKeyDefaultData}\n            showAddBtn={true}\n            showDeleteBtn={true}\n          />\n        </Theme>\n\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"卡片风格和窗口风格,可以自定义增加,删除标签页"}
                demo={<OrderTabs />}
              ></Demo>
              <Demo
                title={"修改配置标签"}
                titleID={"tabs-5"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Button } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\n  margin:10px 0;\n\`;\n\nconst TabPane = Tabs.TabPane;\nexport const hasActivityKeyData = [\n  {\n    title: \'Tab1\',\n    content: <div>content of Tab1</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: \'Tab2\',\n    content: <div>content of Tab2</div>,\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: \'Tab3\',\n    content: <div>content of Tab3</div>\n  },\n  {\n    activityKey: \'3\',\n    title: \'Tab4\',\n    content: <div>content of Tab4</div>\n  },\n  {\n    activityKey: \'4\',\n    title: \'Tab5\',\n    content: <div>content of Tab5</div>\n  },\n  {\n    activityKey: \'5\',\n    title: \'Tab6\',\n    content: <div>content of Tab6</div>\n  },\n  {\n    activityKey: \'6\',\n    title: \'Tab7\',\n    content: <div>content of Tab7</div>\n  },\n  {\n    activityKey: \'7\',\n    title: \'Tab8\',\n    content: <div>content of Tab8</div>\n  }\n];\nexport default class ChangeTabs extends React.Component<any, any> {\n  state = {\n    data: hasActivityKeyData,\n    activeKey: \'0\'\n  };\n  change = (e: Object) => {\n    hasActivityKeyData[0] = {\n      title: 1000000000000,\n      content: 1000000000,\n      activityKey: \'0\'\n    };\n    this.setState({ data: hasActivityKeyData });\n  };\n  onAddClick = () => {\n    const data = this.state.data;\n    const activityKey = \`newTab\${this.state.data.length++}\`;\n    data.push({\n      title: \'New Tab\',\n      content: \'Content of new Tab\',\n      activityKey\n    });\n    this.setState({ data });\n  };\n\n  onDeleteClick = (activityKey: string) => {\n    const { data } = this.state;\n    let newdata = [];\n    if (data.length > 1) {\n      newdata = data.filter(child => {\n        return child.activityKey !== activityKey;\n      });\n    }\n    this.setState({ data: newdata });\n  };\n  render() {\n    const { data } = this.state;\n    return (\n      <div>\n        <Wrapper>\n          <Button style={{ width: 200 }} onClick={this.change} type={\'primary\'}>\n            {\'点击修改标签内容\'}\n          </Button>\n        </Wrapper>\n\n        <Tabs\n          tabType={\'card\'}\n          pagedType={\'single\'}\n          data={data}\n          onAddClick={this.onAddClick}\n          onDeleteClick={this.onDeleteClick}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以自定义配置标签数据"}
                demo={<ChangeTabs />}
              ></Demo>
              <EditTables dataSource={TABS} />
              <EditTables dataSource={TABPANE} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"基本使用"} href={"#tabs-0"} />
                <Link title={"位置"} href={"#tabs-1"} />
                <Link title={"风格"} href={"#tabs-2"} />
                <Link title={"翻页类型"} href={"#tabs-3"} />
                <Link title={"自定义增删标签页"} href={"#tabs-4"} />
                <Link title={"修改配置标签"} href={"#tabs-5"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
