import React, { useCallback, useRef, useEffect, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Background,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
const inputStyle = {
  width: '95%',
  backgroundColor: 'transparent',
  border: '1px solid gray',
  color: '#FFF',
  fontSize: '1em',
  textAlign: 'center',
  outline: 'none',
};

export default function AddNodeOnEdgeDrop({ initialNodes, initialEdges }) {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNodeId, setEditingNodeId] = useState(null);
  const [newLabel, setNewLabel] = useState('');
  const { screenToFlowPosition } = useReactFlow();

  
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node.id);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          backgroundColor: n.id === node.id ? '#ff9800' : '#3F51B5',
        },
      }))
    );
  }, [setNodes]);

  
  const onEdgeClick = useCallback((event, edge) => {
    setSelectedEdge(edge.id);
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        style: {
          ...e.style,
          stroke: e.id === edge.id ? '#ff0000' : '#b1b1b7',
          strokeWidth: e.id === edge.id ? 3 : 2,
        },
      }))
    );
  }, [setEdges]);

  
  const onNodeDoubleClick = useCallback((event, node) => {
    setEditingNodeId(node.id);
    setNewLabel(node.data.label);
  }, []);

  const handleLabelChange = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          label: n.id === editingNodeId ? newLabel : n.data.label,
        },
      }))
    );
    setEditingNodeId(null); 
  }, [editingNodeId, newLabel, setNodes]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            style: { stroke: '#b1b1b7', strokeWidth: 2 },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onConnectEnd = useCallback(
    (event, connectionState) => {
      if (!connectionState.isValid) {
        const id = getId();
        const { clientX, clientY } =
          'changedTouches' in event ? event.changedTouches[0] : event;

        const newNode = {
          id,
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          style: {
            backgroundColor: '#3F51B5',
            color: '#FFF',
            padding: '10px',
            borderRadius: '8px',
            cursor: 'pointer',
          },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectionState.fromNode.id,
            target: id,
            style: { stroke: '#b1b1b7', strokeWidth: 2 },
          })
        );
      }
    },
    [screenToFlowPosition, setEdges, setNodes]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nodes', JSON.stringify(nodes));
    }
  }, [nodes]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('edges', JSON.stringify(edges));
    }
  }, [edges]);

  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            label: node.id === editingNodeId ? (
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                onBlur={handleLabelChange}
                onKeyDown={(e) => e.key === 'Enter' && handleLabelChange()}
                autoFocus
                style={inputStyle}
              />
            ) : (
              node.data.label
            ),
          },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={nodeOrigin}
      >
        <Background color="#aaa" gap={16} />
        <MiniMap
          nodeStrokeColor={(n) => (n.style?.backgroundColor || '#3F51B5')}
          nodeColor={(n) => n.style?.backgroundColor || '#3F51B5'}
          nodeBorderRadius={2}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}
