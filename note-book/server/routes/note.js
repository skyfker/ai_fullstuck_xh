const Router = require('@koa/router');
const router = new Router();
const { findNoteListByType, findNoteDetailById } = require('../controllers/mysqlControl');

router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body;
   try{
    const res = await findNoteListByType(note_type);
    ctx.body = {
        code: '8000',
        data: res,
        msg: 'success'
    }
   }catch(err){
    ctx.body = {
        code: '8005',
        data: [],
        msg: '服务器异常'
    }
   }
})

router.get('/findNoteDetailById', async (ctx) => {
    const id = ctx.query.id
    try{
        const res = await findNoteDetailById(id);
    if(res.length) {
        ctx.body = {
            code: '8000',
            data: res[0],
            msg: 'success'
        }
    } else {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '查找失败'
        }
    }
    }catch(err){
        ctx.body = {
            code: '8005',
            data: [],
            msg: '服务器异常'
        }
    }
})
router.post('/notePublish', async(ctx) => {
    const {
      title,
      note_type,
      head_img,
      note_content,
      userId,
      nickname,
      id
    } = ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())
  
    try {
      const res = await notePublish([userId, title, note_type, note_content, c_time, m_time, head_img, nickname, id], id)
      if (res.affectedRows !== 0) {
        ctx.body = {
          code: '8000',
          data: 'success',
          msg: '发布成功'
        }
      } else {
        ctx.body = {
          code: '8004',
          data: 'fail',
          msg: '发布失败'
        }
      }
    } catch (error) {
      ctx.body = {
        code: '8005',
        data: error,
        msg: '服务端异常'
      }
    }
  
  })
module.exports = router;
