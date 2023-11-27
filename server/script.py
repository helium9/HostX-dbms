import json
import sys
import math
import copy
# import networkx as nx
def transpose_graph(graph):
    transposed_graph = {node: [] for node in graph}

    for node, neighbors in graph.items():
        for neighbor in neighbors:
            transposed_graph[neighbor].append(node)

    return transposed_graph
# kosaraju
def makegraph(graph,li):
    gr={}
#     print(li)
    for i in li:
        
        gr[i]=[j for j in graph[i] if j in li]
        if len(li)>1:
            
            for j in graph[i]:
                if j not in li:
                    graph[i].remove(j)
    return gr    
def makegraph_nodeletion(graph,li):
    gr={}
#     print(li)
    for i in li:
        
        gr[i]=[j for j in graph[i] if j in li]
        
    return gr    


def dfs2(graph,visited,u,list):
    
    x=int(u)
    visited.append(u)
    for node in graph[u]:
        if node not in visited:
            list.append(dfs2(graph,visited,node,list))
    return u 


            
def dfsrec2(graph,visited,u,list):
    
    x=int(u)
    visited.append(u)
    for node in graph[u]:
        if node not in visited:
            dfsrec2(graph,visited,node,list)
            
      
    list.append(u)    
    

def kosaraju2(graph):
    graph2=copy.deepcopy(graph)
    graph2_T=transpose_graph(graph)
    
    
    scc=[]
    visited=[]
    visited2=[]
    result=[]
    st=[]
    for ver in graph2:
        if ver not in visited:
            dfsrec2(graph2,visited,ver,st)
           
    while(len(st)>0):
        result.append(st.pop())  
    for i in result:
        if i not in visited2:
            li=[i]
            dfs2(graph2_T,visited2,i,li)
            scc.append(makegraph(graph2,li))
            

            
            
    return [scc,graph2]
    

def makeedge(graph):
    map={}
    for ver in graph:
        map[ver]=0
    for ver in graph:
        for vertex in graph[ver]:
            map[vertex]=map[vertex]+1;
    wg=[]
    g=copy.deepcopy(graph)
      
    for ver in g:
        
        for vertex in g[ver]:
            
            wg.append([ver,vertex,map[ver]+map[vertex]])
            for i in g[vertex]:
                if i==ver:
                    g[vertex].remove(ver)
                    
            
    wg=sorted(wg, key=lambda x: (x[2],min(timeOfENtry[x[1]],timeOfENtry[x[0]])))     
    return wg    

 
# krushkal
def makeset(node):
    dict={}
    
    for i in node:
        dict[i]=i
    return dict
def union(n,m,sets):
    sets[n]=m
def find(sets,n):
    while(sets[n]!=n):
        n=sets[n]
   
    return n    
    
    


def allotgrpkrushkal(graph,G,n):
    # print("graph",graph)
    # print("G",G)
    g=makeedge(graph)
    mst=set()
    nodes=[i for i in graph]
    s=makeset(nodes)
    # print("g",g)
    # print("mst",mst,len(mst))
    # print("s",s)
    # print(n)
   
    while(len(mst)!=n):
        
        
        edge=g.pop(0)
        # print("this",find(s,edge[0]),find(s,edge[1]))
        
        if(find(s,edge[0])!=find(s,edge[1])):
            # print("Chaos")
            if edge[0] not in mst and edge[1] not in mst and len(mst)+2>n:
                # print("Chao")
                
                mst.add(edge[0])
                continue
            mst.add(edge[0])
            mst.add(edge[1])
            union(edge[0],edge[1],s)
        if(len(edge)==0):
            # print("Chao")
            break
    # print("End")    
    room[n]=room[n]-1
    ms=[i for i in mst]
    mst_set = set(mst)
   
    nodes_to_delete = [node for node in G.keys() if node in mst_set]
    for node in nodes_to_delete:
        del G[node]
        for other_node in G:
            G[other_node] = [neighbor for neighbor in G[other_node] if neighbor != node]

    return ms

def dfs2(graph,visited,u,list):
   
    x=int(u)
    visited.append(u)
    for node in graph[u]:
        if node not in visited:
            list.append(dfs2(graph,visited,node,list))
    return u 
def wants(graph,fromgraph):
    count=0
    
    for i in graph:
        
        for j in graph[i]:
            
            
            if j in fromgraph:
                count=count+1
    return count            
def minliked_node(graph):
    num={}
    
    for node in graph:
        num[node]=0
    for node in graph:
        for i in graph[node]:
            num[i]=num[i]+1
    return min(num,key =lambda x:num[x])        
        



def unified(graph,G,n):
    visited=[]
    glist=[]
    for i in G:
        if i not in visited:
            li=[i]
            dfs2(G,visited,i,li)
            glist.append(li)
    glist=sorted(glist,key=lambda x:-len(x))  
   
    
    
    
    node=[i for i in graph]
    inode=[i for i in graph]
    glist = [sublist for sublist in glist if sorted(sublist) != sorted(node)]
    
        
    
    to_take=[]
    satisfaction=0
    for i in glist:
        if len(i)==n-len(node):
            if(satisfaction<=wants(graph,i)):
                satisfaction=wants(graph,i)
                to_take=i
                
    
    for u in to_take:
        if u not in node:
            node.append(u)   
            
            
            
    if(len(node)==n):
            
        for ver in node:
            if ver in G:
                del G[ver]

        for ver in G:
            for vertex in G[ver]:
                if vertex in node:
                    G[ver].remove(vertex)



        for ver in inode:
            if ver in G:
                for v in G[ver]:
                    G[ver].remove(v)
        for ver in inode:
            if ver in G:
                del G[ver] 
        for ver in G:
            for vertex in G[ver]:
                if vertex in inode:
                    G[ver].remove(vertex)        
        return node  
#     print(node)
#     print(to_take)

        
    if len(to_take)==0:
        for i in reversed(glist):
            if len(node)+len(i)<=n:
                for vertex in i:
                    to_take.append(vertex)
                    node.append(vertex)
                glist.remove(i)        

    
    
    if(len(node)==n):
        for ver in to_take:
            if ver not in node:
                node.append(ver)
                for v in G[ver]:
                    G[ver].remove(v)
        for ver in to_take:
            if ver in G:
                del G[ver]
        return node  
            
#     print(node)
#     print(to_take)
    glist=[makegraph_nodeletion(G,i) for i in glist]    
#     print(glist)
   
   
    if (len(node))!=n:
        for gs in reversed(glist):
                if gs!=transpose_graph(gs):
                    
                    if len(gs)>1 and gs not in x[0]:
                        while (len(gs)!=0):
                            x1=minliked_node(gs)
                            to_take.append(x1)
                            node.append(x1)
                            temp=[]
                            for ver in gs:
                                temp.append(ver)
                                for v in gs[ver]:
                                    if v == x1:
                                        gs[ver].remove(v)
                            for ver in temp:
                                if ver == x1:
                                    del gs[ver]
                            if((len(node))==n):
                                break 
                    else :
                        while (len(gs)!=0):
                            x1=minliked_node(gs)
                            to_take.append(x1)
                            node.append(x1)
                            temp=[]
                            for ver in gs:
                                temp.append(ver)
                                for v in gs[ver]:
                                    if v == x1:
                                        gs[ver].remove(v)
                            for ver in temp:
                                if ver == x1:
                                    del gs[ver]
                            if((len(node))==n):
                                break            
                elif( gs==transpose_graph(gs)):
                   
                    while (len(gs)!=0):
                        x1=minliked_node(gs)
                        to_take.append(x1)
                        node.append(x1)
                        temp=[]
                        for ver in gs:
                            temp.append(ver)
                            for v in gs[ver]:
                                if v == x1:
                                    gs[ver].remove(v)
                        for ver in temp:
                            if ver == x1:
                                del gs[ver]
                        if(len(node)==n):
                            break  
                if((len(node))==n):
                    break                        
#     print(node)
#     print(to_take)        
    
    for ver in node:
        if ver in G:
            for v in G[ver]:
                G[ver].remove(v)
            
    for ver in node:
        if ver in G:
            del G[ver]
        
    for ver in G:
        for vertex in G[ver]:
            if vertex in node:
                G[ver].remove(vertex)
               
      
    
    for ver in inode:
        if ver in G:
            for v in G[ver]:
                G[ver].remove(v)
    for ver in inode:
        if ver in G:
            del G[ver] 
    for ver in G:
        for vertex in G[ver]:
            if vertex in inode:
                G[ver].remove(vertex)        
    return node   
                        
        
         
   
processed_data = []

for line in sys.stdin:
    processed_data.append(json.loads(line))

timeOfEntryMap=processed_data[1]
roommateMap=processed_data[0]
rooms=processed_data[2]


# inputs
input = roommateMap

for key, value in input.items():
        input[key] = [item for item in value if item != key]

rooms = {int(key): value for key, value in rooms.items()}
room=rooms
# room={size:num}
timeOfENtry = timeOfEntryMap
# print("rerer", rooms, input, timeOfENtry)

# solve

ans={}

# print("input2", input)

for i in room:
    ans[i]=[]
out=kosaraju2(input)
# print("scc")
G=out[1]
scc=out[0]
scc=[i for i in scc if len(i)>1]
scc = sorted(scc, key=lambda x: -len(x))
n=max(room, key=lambda k: k)

for grs in scc:
        # print(grs)
        if(len(G)==0 or len(room)==0):
            break
        if len(grs)==n:
            grt=[i for i in grs]
            for ver in G:
                for v in G[ver]:
                    if v in grt:
                        G[ver].remove(v)
            for ver in grt:
                if ver in G:
                    del G[ver]
            room[n]=room[n]-1
            if(room[n]==0):
                del room[n]
            ans[n].append(grt)
            if(len(G)==0 or len(room)==0):
                break
            n=max(room, key=lambda k: k)
            
            continue
                    
        if len(grs)>n:
            grt=allotgrpkrushkal(grs,G,n)
            
            
            
#             room[n]=room[n]-1
#             if(room[n]==0):
#                 del room[n]
            ans[n].append(grt)
            if(len(G)==0 or len(room)==0):
                break
            n=max(room, key=lambda k: k)
            continue
        if len(grs)<n:
            grt=unified(grs,G,n)
            
            room[n]=room[n]-1
            if(room[n]==0):
                del room[n]
            ans[n].append(grt)
            if(len(G)==0 or len(room)==0):
                break
            n=max(room, key=lambda k: k)
            continue

while(len(G)!=0 and len(room)!=0):
    # print("Gnow",G) 
    if(len(G)==0 or len(room)==0):
            break
    visited=[]
    glist=[]
    for i in G:
        if i not in visited:
            li=[i]
            dfs2(G,visited,i,li)
            glist.append(li)
    glist=[makegraph_nodeletion(G,i) for i in glist]
    # print("glist",glist)
    # print("room",room)
    # print("ans",ans)
    # print("n",n)


    for grs in glist:
        if(len(G)==0 | len(room)==0):
            # print("Executed_1")
            break
        if len(grs)==n:
            # print("grs_1",grs)
            grt=[i for i in grs]
            for ver in G:
                for v in G[ver]:

                    if v in grt:
                        G[ver].remove(v)
            for ver in grt:
                if ver in G:
                    del G[ver]
            room[n]=room[n]-1
            if(room[n]==0):
                del room[n]
            ans[n].append(grt)
            # print("1",grt)
            if(len(G)==0 or len(room)==0):
                # print("Executed_2")
                break
            n=max(room, key=lambda k: k)
            continue

        if len(grs)>n:
            # print("grs_2",grs)
            grt=allotgrpkrushkal(grs,G,n)



#             room[n]=room[n]-1
#             if(room[n]==0):
#                 del room[n]
            # print("2",grt)
            ans[n].append(grt)
            if(len(G)==0 or len(room)==0):
                # print("Executed_3")
                break
            n=max(room, key=lambda k: k)
            continue
        if len(grs)<n: 
            # print("grs_3",grs)
            grt=unified(grs,G,n)
            # print("3",grt)

            room[n]=room[n]-1
            if(room[n]==0):
                del room[n]
            ans[n].append(grt)
            if(len(G)==0 or len(room)==0):
                # print("Executed_4")
                break
            n=max(room, key=lambda k: k)
            continue

ans = {str(key): value for key, value in ans.items()}
# print("Helo")
# print("ans",ans)
print(ans)
    