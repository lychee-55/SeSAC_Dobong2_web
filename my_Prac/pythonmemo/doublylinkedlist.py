# 매직 명령어(magic command)로, 셀에 있는 내용을 파일로 저장할 때 사용

class Node:

    def __init__(self, item):
        self.data = item
        self.prev = None #
        self.next = None


class DoublyLinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None) #
        self.tail = Node(None) #
        self.head.prev = None
        self.head.next = self.tail #
        self.tail.prev = self.head #
        self.tail.next = None


    def __repr__(self):
        if self.nodeCount == 0:
            return 'LinkedList: empty'

        s = ''
        curr = self.head
        while curr.next.next:
            curr = curr.next
            s += repr(curr.data)
            if curr.next.next is not None:
                s += ' -> '
        return s


    def getLength(self):
        return self.nodeCount


    def traverse(self):
        result = []
        curr = self.head
        while curr.next.next: # tail도 더미노드가 있으므로 next.next
            curr = curr.next
            result.append(curr.data)
        return result

    def reverse(self):
        result = []
        curr = self.tail
        while curr.prev.prev: #
            curr = curr.prev
            result.append(curr.data)
        return result

    # # 지난번 것
	# def getAt(self, pos):
	# 	if pos < 0 or pos > self.nodeCount:
	# 		return None

	# 	i = 0
	# 	curr = self.head
	# 	while i < pos:
	# 		curr = curr.next
	# 		i += 1

	# 	return curr

    def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None

        if pos > self.nodeCount // 2:
            i = 0
            curr = self.tail
            while i < self.nodeCount - pos + 1:
                curr = curr.prev
                i += 1
        else:
            i = 0
            curr = self.head
            while i < pos:
                curr = curr.next
                i += 1

        return curr


    def insertAfter(self, prev, newNode):
        next = prev.next
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        self.nodeCount += 1
        return True

    # 연습문제
    def insertBefore(self, next, newNode):
        if next is None or next is self.head:
            return False

        prev = next.prev
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        self.nodeCount += 1
        return True

    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        prev = self.getAt(pos - 1)
        return self.insertAfter(prev, newNode)

    # 연습문제
    def popAfter(self, prev):
        if prev.next == self.tail:  # No node to remove
            return None

        delNode = prev.next
        prev.next = delNode.next
        delNode.next.prev = prev

        self.nodeCount -= 1
        return delNode.data

    # 연습문제
    def popBefore(self, next):
        if next.prev == self.head:
            return None

        delNode = next.prev
        next.prev = delNode.prev
        delNode.prev.next = next

        self.nodeCount -= 1
        return delNode.data

    # 연습문제
    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError("Index out of bounds")

        return self.popAfter(self.getAt(pos - 1))

    # 연습문제
    def concat(self, L):
        if L.nodeCount == 0:
            return

        if self.nodeCount == 0:  # 현재 리스트가 비어 있는 경우
            self.head = L.head.next
            self.tail = L.tail
        else:
            self.tail.prev.next = L.head.next
            L.head.next.prev = self.tail.prev
            self.tail = L.tail

        self.nodeCount += L.nodeCount
