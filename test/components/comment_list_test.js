import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList', ()=>{
  let component;
  beforeEach(()=>{
    component= renderComponent(CommentList, null, {comments:['comment 1', 'comment 2']});
  });

  it('show an li for each comment', ()=>{
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment', ()=>{
    expect(component).to.contain('comment 1');
    expect(component).to.contain('comment 2');
  });

});
