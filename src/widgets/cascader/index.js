import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import CASCADER from '@lugia/lugia-web/dist/cascader/lugia.cascader.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultCascader =  require('./DefaultCascader').default;  const HoverCascader =  require('./HoverCascader').default;  const DefaultValueCascader =  require('./DefaultValueCascader').default;  const DisabledItemCascader =  require('./DisabledItemCascader').default;  const OnlyShowLastLevelCascader =  require('./OnlyShowLastLevelCascader').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'级联选择'} subTitle={'Cascader'} desc={'通过级联选择,可以清晰地显示层级数据结构'} />
                              <Demo title={'基本用法'} titleID={'cascader-0'} code={<code>{ `/**
                              <EditTables dataSource={CASCADER} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#cascader-0'} /><Link title={'滑过展开下一级'} href={'#cascader-1'} /><Link title={'默认值'} href={'#cascader-2'} /><Link title={'禁选项'} href={'#cascader-3'} /><Link title={'只显示根级选中项'} href={'#cascader-4'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        