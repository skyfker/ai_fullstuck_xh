function preOrder(root) {
    if(!root) return []

    let res = []
    let resL = preOrder(root.left)
    let resR = preOrder(root.right)
    res.push(root.val)

    return [...resL, ...resR, ...res]
}