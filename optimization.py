import numpy as np
from scipy.optimize import linear_sum_assignment

def optimize_shifts(data):
    # シンプルな線形割り当て問題として実装
    n_employees = len(data['employees'])
    n_shifts = len(data['shifts'])
    
    # コスト行列の作成（ここでは単純にランダムな値を使用）
    cost_matrix = np.random.rand(n_employees, n_shifts)
    
    # 線形割り当て問題の解決
    row_ind, col_ind = linear_sum_assignment(cost_matrix)
    
    # 結果の整形
    optimized_shifts = []
    for i, j in zip(row_ind, col_ind):
        optimized_shifts.append({
            'employee': data['employees'][i],
            'shift': data['shifts'][j]
        })
    
    return optimized_shifts
