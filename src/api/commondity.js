//这里其实就是从其他的js拷贝过来的，修改了request请求地址
//修改了请求参数、请求方法、data表示传的json参数，url使用`符号实现url地址拼接，这里的请求地址会加上前缀为dconfig文件夹中的dev....
import request from '@/utils/request'

export function findAll(page, limit,sort,sortDirection,CommondityDTO) {
  return request({
    url: `/rdy/api/commodity/findAll/${page}/${limit}/${sort}/${sortDirection}`,
    method: 'post',
    data: CommondityDTO
  })
}