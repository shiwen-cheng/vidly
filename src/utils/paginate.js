// 在*客户端*实现分页
import _ from "lodash";

export function paginate(items, pageNum, pageSize) {
  const startIndex = (pageNum - 1) * pageSize;

  return _(items) // _(items) 返回一个 lodash 对象，可以写链式表达式
    .slice(startIndex, startIndex + pageSize)
    .value(); // 将 lodash 对象转换为 array 数组
}
