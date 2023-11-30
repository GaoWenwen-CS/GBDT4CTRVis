import { Col, Row, Card } from 'antd';
import './App.css';
import FeatureCorrelation from './components/FeatureCorrelation';
import FeatureOverview from './components/FeatureOverview';
import DataOverview from './components/DataOverview';
import DataList from './components/DataList';
import DataStatistic from './components/DataStatistic';
import TreeBoosting from './components/TreeBoosting';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Card title="Control Panel" style={{ height: '18vh' }}><ControlPanel /></Card>
          <Card title="Data Overview" style={{ height: '50vh' }}>
            <DataOverview />
          </Card>
        </Col>
        <Col span={13}>
          <Card title="Tree Boosting" className='top'><TreeBoosting /></Card>
        </Col>
        <Col span={5}>
          <Card title="Feature Importance" className='top'><FeatureOverview /></Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card title="Data Statistics" className='bottom'><DataStatistic /></Card>
        </Col>
        <Col span={13}>
          <Card title="Data List" className='bottom'><DataList /></Card>
        </Col>
        <Col span={5}>
          <Card title="Feature Correlation" className='bottom'><FeatureCorrelation /></Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
