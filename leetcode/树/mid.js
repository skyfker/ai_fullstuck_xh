function preOrder(root) {
    if(!root) return []

    let res = []
    let resL = preOrder(root.left)
    res.push(root.val)
    let resR = preOrder(root.right)

    return [...resL, ...res, ...resR]
}