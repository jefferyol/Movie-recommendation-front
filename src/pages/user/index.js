import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card, Avatar,Button,Input,Tag,  Tooltip } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,UserOutlined ,PlusOutlined} from '@ant-design/icons';
import {UserWrapper} from './style'

const { Meta } = Card;

class User extends React.Component {
    state = {
        loading: true,
        tags: ['爱情','恐怖'],
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    };

     onChange = e => {
        console.log('Change:', e.target.value);
    };
    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };
    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };
    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };
    handleEditInputChange = e => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = () => {
        this.setState(({ tags, editInputIndex, editInputValue }) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                tags: newTags,
                editInputIndex: -1,
                editInputValue: '',
            };
        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    render() {
        const { loading,tags, inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
        const {TextArea,Password} = Input;
        return (
            <UserWrapper styled={{color:'#B0C4DE'}}>
               <Card title = '个人主页' headStyle={{color:'#B0C4DE'}} style={{
                   margin : '50px auto',
                   textAlign : 'center',
                   width : '400px',
                   background: '#00000060',
                   color:'#B0C4DE'
               }} hoverable={true}>
                   <Avatar size={64} icon={<UserOutlined />} />
                   <div style={{
                       marginTop : '20px'
                   }}>
                       账户名：
                       <div style={{
                           display : 'inline-block',
                           marginLeft : '5px',
                       }} >
                           <Input size="large" placeholder="change your username" prefix={<UserOutlined />} /></div>
                   </div>
                   <div style={{
                       marginTop:'20px',

                   }}>
                       <span>我喜欢的电影类型：</span>
                       {tags.map((tag, index) => {
                           if (editInputIndex === index) {
                               return (
                                   <Input
                                       ref={this.saveEditInputRef}
                                       key={tag}
                                       size="small"
                                       className="tag-input"
                                       value={editInputValue}
                                       onChange={this.handleEditInputChange}
                                       onBlur={this.handleEditInputConfirm}
                                       onPressEnter={this.handleEditInputConfirm}
                                   />
                               );
                           }

                           const isLongTag = tag.length > 20;

                           const tagElem = (
                               <Tag
                                   className="edit-tag"
                                   key={tag}
                                   closable={true}
                                   onClose={() => this.handleClose(tag)}
                               >
              <span
                  onDoubleClick={e => {
                      if (index !== 0) {
                          this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                              this.editInput.focus();
                          });
                          e.preventDefault();
                      }
                  }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
              
                               </Tag>
                           );
                           return isLongTag ? (
                               <Tooltip title={tag} key={tag}>
                                   {tagElem}
                               </Tooltip>
                           ) : (
                               tagElem
                           );
                       })}
                       {inputVisible && (
                           <Input
                               ref={this.saveInputRef}
                               type="text"
                               size="small"
                               className="tag-input"
                               value={inputValue}
                               onChange={this.handleInputChange}
                               onBlur={this.handleInputConfirm}
                               onPressEnter={this.handleInputConfirm}
                               placeholder = '按下回车键保存标签'
                               style={{
                                  display : 'inline-block',
                               }}
                           />
                       )}
                       {!inputVisible && (
                           <Tag className="site-tag-plus" onClick={this.showInput}>
                               <PlusOutlined /> New Tag
                           </Tag>
                       )}
                   </div>
                   <div style={{
                       marginTop:'20px',
                       display:'flex',
                       alignItems:'center',
                       color:'#B0C4DE'
                   }}>
                       <span style={{
                       }}>请输入个人简介：</span>
                       <TextArea  showCount maxLength={200} onChange={this.onChange} placeholder='请输入个人简介' style={{
                           display : 'inline-block',
                       }}/>
                   </div>
                   <Button >保存修改</Button>
               </Card>
            </UserWrapper>
        );
    }
}



export default User;