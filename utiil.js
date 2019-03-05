const dislodgeDuplicates = function(items, filterKey) {
    if (!items instanceof Array) {
        throw new Error('请输入正确的数组')
    }
    if (items.length < 1) {
        throw new Error('请输入正确的数组')
    }
    if (!filterKey) {
        return [...new Set(items)]
    }
    let itemObject = {}
    let tempArr = []
    items.map((item) => {
        let key = item[filterKey]
        if (!itemObject[key]) {
            itemObject[key] = item
            tempArr.push(item)
        }
    })
    return tempArr
}
const timestampFormatter = function(timestamp) {
    if (typeof timestamp !== 'number') {
        throw new Error('请输入正确时间戳')
    }
    let year = new Date(timestamp).getFullYear()
    let month = new Date(timestamp).getMonth() + 1
    let day = new Date(timestamp).getDate()
    return `${year}年${month}月${day}日`
}
export {
    dislodgeDuplicates,
    timestampFormatter
}