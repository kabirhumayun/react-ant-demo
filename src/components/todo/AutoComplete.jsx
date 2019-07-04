import React, {Component} from 'react';
import { Upload, message, Icon, Button, Input, AutoComplete } from 'antd';

const { Option } = AutoComplete;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

export default class Complete extends Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
        <>
      <div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>

      <div>
            <Upload {...props}>
                <Button>
                    <Icon type="upload" /> Upload
                </Button>
            </Upload>
      </div>
      </>
    );
  }
}

//ReactDOM.render(<Complete />, mountNode);