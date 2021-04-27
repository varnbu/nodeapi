module.exports = agentPCRouters = [
    {
        "name": "index",
        "path": "/",
        "children": [{"name": "agentIndex", "path": "agent/agentindex"}, {
            "name": "businessDataAccount",
            "path": "/businesstotal/businesstotal",
            "children": [{"name": "businesstotalIndex", "path": "index"}]
        }, {
            "name": "businessDataAccount",
            "path": "/businesstotal/businesstotal",
            "children": [{"name": "businesstotalIndex", "path": "index"}]
        }, {"name": "localStaticAgentIndex", "path": "/localStatic/agentIndex"}, {
            "name": "localStaticAgentList",
            "path": "/localStatic/agentList"
        }, {"name": "localStaticBusinessList", "path": "/localStatic/businessList"}, {
            "name": "localStaticOrderList",
            "path": "/localStatic/orderList"
        }, {"name": "shopAgentList", "path": "share/index"}, {
            "name": "shopMemberList",
            "path": "sharingMallManage/shopMemberList"
        }, {"name": "shopOrderlist", "path": "sharingMallManage/shopOrderlist"}, {
            "name": "telProfit",
            "path": "/localStatic/billProfit"
        }, {"name": "billbusinessList", "path": "/localStatic/billbusinessList"}, {
            "name": "billOrderList",
            "path": "/localStatic/billOrderList"
        }, {"name": "preQRcode", "path": "precode/preqrlist"}, {
            "name": "GroupListAgent",
            "path": "groupsendagent/sendindex"
        }, {"name": "SaaSBusinessManagement", "path": "/SaaSBusinessManage"}, {
            "name": "RegionalOperations",
            "path": "RegionalOperations"
        }, {"name": "storeManagement", "path": "/storeManagement"}, {
            "name": "buildStore",
            "path": "/buildStore"
        }, {"name": "agentEmployeeRoleEdit", "path": "agentEmployeeRoleEdit"}, {
            "name": "nopower",
            "path": "/nopower"
        }, {"name": "profit", "path": "profit"}, {
            "name": "dataAccount",
            "path": "dataAccount",
            "children": [{"name": "mineIndex", "path": "mineIndex"}, {"name": "otherIndex", "path": "otherIndex"}]
        }, {"name": "otherBusiness", "path": "otherBusiness"}, {
            "name": "store",
            "path": "store"
        }, {"name": "mctRechargeRecord", "path": "mctRechargeRecord"}, {
            "name": "storeRechargeRecord",
            "path": "storeRechargeRecord"
        }, {"name": "newRole", "path": "newRole"}, {
            "name": "employeeManageIndex",
            "path": "employee/lists",
            "children": [{"name": "employeeManage", "path": "employeeManage"}, {
                "name": "roleManage",
                "path": "roleManage"
            }]
        }, {"name": "newGroup", "path": "GroupChange/newGroup"}, {
            "name": "addEditor",
            "path": "addEditor"
        }, {"name": "TotalIncome", "path": "TotalIncome"}, {
            "name": "allMember",
            "path": "allMember"
        }, {"name": "memberDetails", "path": "memberDetails"}, {
            "name": "DataStatistics",
            "path": "DataStatistics"
        }, {"name": "shareProfit", "path": "shareProfit"}, {
            "name": "shareProfitDetails",
            "path": "/shareProfitDetails"
        }]
    }]
