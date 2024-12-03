// 关注和粉丝列表类的结构是一致的
// 定义单个关注用户的信息接口
interface FollowUser {
  id: string
  name: string
  photo: string
  fans_count: string
  mutual_follow: string
}

// 定义包含关注用户列表等信息的整体接口
interface FollowListData {
  total_count: string
  page: string
  per_page: string
  results: FollowUser[]
}
