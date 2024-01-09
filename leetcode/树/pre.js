function preOrder(root) {
    if(!root) return []

    let res = []
    res.push(root.val)
    let resL = preOrder(root.left)
    let resR = preOrder(root.right)
    return res.concat(resL,resR)
}